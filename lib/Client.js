'use strict';

const pkg = require('../package.json');
const Getter = require('./Getter');

const USER_AGENT = JSON.stringify({
  bindings_version: pkg.version,
  lang: 'node',
  lang_version: process.version,
  platform: process.platform,
  arch: process.arch,
  publisher: 'cloudflare',
});

class CloudflareApiClient {
  constructor(options) {
    this.email = options.email;
    this.key = options.key;
    this.token = options.token;
    this.getter = new Getter();
  }

  isPlainObject(x) {
    const prototype = Object.getPrototypeOf(x);
    const toString = Object.prototype.toString;

    return (
      toString.call(x) === '[object Object]' &&
      (prototype === null || prototype === Object.getPrototypeOf({}))
    );
  }

  isUserServiceKey(x) {
    // console.log(x && x.substring(0, 5) === 'v1.0-')
    return x && x.substring(0, 5) === 'v1.0-';
  }

  async request({method, uriPath, data, params}, opts) {
    let uri;
    if (uriPath) {
      uri = `https://api.cloudflare.com/client/v4/${uriPath}`;
    } else {
      uri = `https://api.cloudflare.com/client/v4/${opts.path}`;
    }
    for (let [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) {
        value = '';
      }
      uri = uri.replace(`:${key}`, value);
    }
    opts.auth = opts.auth || {};
    opts.auth.email = this.email;
    opts.auth.key = this.key;
    opts.auth.token = this.token;
    const options = {
      json: opts.json !== false,
      timeout: opts.timeout || 1e4,
      retries: opts.retries,
      method: method,
      headers: {
        'user-agent': `api_cloudflare_client/${pkg.version} node/${
          process.versions.node
        }`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Cloudflare-Client-User-Agent': USER_AGENT,
      },
    };

    if (this.isUserServiceKey(this.key)) {
      options.headers['X-Auth-User-Service-Key'] = this.key;
    } else if (this.key) {
      options.headers['X-Auth-Key'] = this.key;
      options.headers['X-Auth-Email'] = this.email;
    } else if (this.token) {
      options.headers.Authorization = `Bearer ${this.token}`;
    }
    if (method === 'GET') {
      options.query = data;
    } else {
      options.body = data;
    }

    if (
      options.body &&
      (this.isPlainObject(options.body) || Array.isArray(options.body))
    ) {
      options.body = JSON.stringify(options.body);
    }
    options.retries = 2;
    // console.log('uri', uri);
    // console.log('options', options);
    return await this.getter
      .got(uri, options)
      .then(res => res)
      .catch(err => {
        throw err;
      });
  }
}

module.exports = CloudflareApiClient;
