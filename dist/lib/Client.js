"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
// @ts-ignore
const package_json_1 = __importDefault(require("../package.json"));
const USER_AGENT = JSON.stringify({
    bindings_version: package_json_1.default.version,
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
    }
    isPlainObject(x) {
        if (x === null || typeof x === 'undefined') {
            return false;
        }
        const prototype = Object.getPrototypeOf(x);
        const toString = Object.prototype.toString;
        return (toString.call(x) === '[object Object]' &&
            (prototype === null || prototype === Object.getPrototypeOf({})));
    }
    isUserServiceKey(x) {
        return !!(x && x.substring(0, 5) === 'v1.0-');
    }
    async request({ method, uriPath, path, data, params = {} }, opts = {}) {
        let uri;
        const finalPath = uriPath || path || opts.path;
        if (finalPath) {
            if (finalPath.startsWith('https://')) {
                uri = finalPath;
            }
            else if (finalPath.startsWith('/')) {
                uri = `https://api.cloudflare.com/client/v4${finalPath}`;
            }
            else {
                uri = `https://api.cloudflare.com/client/v4/${finalPath}`;
            }
        }
        else {
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
        const options = {
            timeout: opts.timeout || 10000,
            method: method,
            headers: {
                'user-agent': `api_cloudflare_client/${package_json_1.default.version} node/${process.versions.node}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-Cloudflare-Client-User-Agent': USER_AGENT,
            },
        };
        if (this.isUserServiceKey(this.key)) {
            options.headers['X-Auth-User-Service-Key'] = this.key;
        }
        else if (this.key) {
            // Cloudflare API Keys are 37 chars, Tokens are 40 chars.
            // If it looks like a token, use Authorization header.
            if (this.key.length === 40) {
                options.headers.Authorization = `Bearer ${this.key}`;
            }
            else {
                options.headers['X-Auth-Key'] = this.key;
                if (this.email)
                    options.headers['X-Auth-Email'] = this.email;
            }
        }
        else if (this.token) {
            options.headers.Authorization = `Bearer ${this.token}`;
        }
        if (method === 'GET') {
            options.params = data;
        }
        else {
            options.data = JSON.stringify(data);
        }
        // Custom retries property won't be picked up by axios directly unless intercepted, 
        // but preserving for backward compatibility in config object.
        options.retries = 2;
        return await (0, axios_1.default)(uri, options)
            .then((res) => res.data)
            .catch((err) => {
            throw err;
        });
    }
}
exports.CloudflareApiClient = CloudflareApiClient;
exports.default = CloudflareApiClient;
