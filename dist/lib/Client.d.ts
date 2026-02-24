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
export declare class CloudflareApiClient {
    email?: string;
    key?: string;
    token?: string;
    constructor(options: CloudflareAuthOptions);
    isPlainObject(x: any): boolean;
    isUserServiceKey(x?: string): boolean;
    request({ method, uriPath, path, data, params }: RequestOptions, opts?: RequestConfig): Promise<any>;
}
export default CloudflareApiClient;
//# sourceMappingURL=Client.d.ts.map