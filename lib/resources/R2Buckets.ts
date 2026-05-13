import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class R2Buckets extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/r2/buckets/:bucketName';
  }

  /**
   * Lists all R2 buckets for an account.
   *
   * @param {string} accountId
   * @returns {Promise<Object>}
   */
  async browse(accountId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts/:accountId/r2/buckets',
        data: {},
        params: { accountId, bucketName: null },
      },
      this
    );
  }

  /**
   * Gets metadata for an existing R2 bucket.
   *
   * @param {string} accountId
   * @param {string} bucketName
   * @returns {Promise<Object>}
   */
  async read(accountId: string, bucketName: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { accountId, bucketName },
      },
      this
    );
  }

  /**
   * Creates a new R2 bucket.
   *
   * @param {string} accountId
   * @param {Object} data - { name, locationHint? }
   * @returns {Promise<Object>}
   */
  async add(accountId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/r2/buckets',
        data,
        params: { accountId, bucketName: null },
      },
      this
    );
  }

  /**
   * Deletes an existing R2 bucket.
   *
   * @param {string} accountId
   * @param {string} bucketName
   * @returns {Promise<Object>}
   */
  async del(accountId: string, bucketName: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { accountId, bucketName },
      },
      this
    );
  }
}

export default R2Buckets;
