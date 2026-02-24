import axios from 'axios';

// @ts-ignore
import pkg from '../package.json';

const USER_AGENT = JSON.stringify({
  bindings_version: pkg.version,
  lang: 'node',
  lang_version: process.version,
  platform: process.platform,
  arch: process.arch,
  publisher: 'cloudflare',
});

export interface CloudflareAuthOptions {
  email?: string;
  key?: string;
  token?: string;
}

export interface RequestOptions {
  method: string;
  uriPath?: string | null;
  path?: string;
  data?: any;
  params?: Record<string, any>;
  json?: boolean;
  contentType?: string;
}

export interface RequestConfig {
  path?: string;
  timeout?: number;
  retries?: number;
  auth?: CloudflareAuthOptions;
  [key: string]: any;
}

export class CloudflareApiClient {
  public email?: string;
  public key?: string;
  public token?: string;

  constructor(options: CloudflareAuthOptions) {
    this.email = options.email;
    this.key = options.key;
    this.token = options.token;
  }

  isPlainObject(x: any): boolean {
    if (x === null || typeof x === 'undefined') {
      return false;
    }
    const prototype = Object.getPrototypeOf(x);
    const toString = Object.prototype.toString;

    return (
      toString.call(x) === '[object Object]' &&
      (prototype === null || prototype === Object.getPrototypeOf({}))
    );
  }

  isUserServiceKey(x?: string): boolean {
    return !!(x && x.substring(0, 5) === 'v1.0-');
  }

  async request(
    { method, uriPath, path, data, params = {} }: RequestOptions,
    opts: RequestConfig = {}
  ): Promise<any> {
    let uri: string;
    const finalPath = uriPath || path || opts.path;
    if (finalPath) {
      if (finalPath.startsWith('https://')) {
        uri = finalPath;
      } else if (finalPath.startsWith('/')) {
        uri = `https://api.cloudflare.com/client/v4${finalPath}`;
      } else {
        uri = `https://api.cloudflare.com/client/v4/${finalPath}`;
      }
    } else {
      uri = `https://api.cloudflare.com/client/v4/`;
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

    const options: any = {
      timeout: opts.timeout || 10000,
      method: method,
      headers: {
        'user-agent': `api_cloudflare_client/${pkg.version} node/${process.versions.node}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Cloudflare-Client-User-Agent': USER_AGENT,
      },
    };

    if (this.isUserServiceKey(this.key)) {
      options.headers['X-Auth-User-Service-Key'] = this.key;
    } else if (this.key) {
      // Cloudflare API Keys are 37 chars, Tokens are 40 chars.
      // If it looks like a token, use Authorization header.
      if (this.key.length === 40) {
        options.headers.Authorization = `Bearer ${this.key}`;
      } else {
        options.headers['X-Auth-Key'] = this.key;
        if (this.email) options.headers['X-Auth-Email'] = this.email;
      }
    } else if (this.token) {
      options.headers.Authorization = `Bearer ${this.token}`;
    }

    if (method === 'GET') {
      options.params = data;
    } else {
      options.data = JSON.stringify(data);
    }

    // Custom retries property won't be picked up by axios directly unless intercepted, 
    // but preserving for backward compatibility in config object.
    options.retries = 2;

    return await axios(uri, options)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  }
}

export default CloudflareApiClient;
