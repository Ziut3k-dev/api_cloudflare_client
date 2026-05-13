import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class R2Buckets extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Lists all R2 buckets for an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    browse(accountId: string): Promise<any>;
    /**
     * Gets metadata for an existing R2 bucket.
     *
     * @param {string} accountId
     * @param {string} bucketName
     * @returns {Promise<Object>}
     */
    read(accountId: string, bucketName: string): Promise<any>;
    /**
     * Creates a new R2 bucket.
     *
     * @param {string} accountId
     * @param {Object} data - { name, locationHint? }
     * @returns {Promise<Object>}
     */
    add(accountId: string, data: any): Promise<any>;
    /**
     * Deletes an existing R2 bucket.
     *
     * @param {string} accountId
     * @param {string} bucketName
     * @returns {Promise<Object>}
     */
    del(accountId: string, bucketName: string): Promise<any>;
}
export default R2Buckets;
//# sourceMappingURL=R2Buckets.d.ts.map