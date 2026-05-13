import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class Accounts extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId';
  }

  /**
   * List all accounts the user has access to.
   *
   * @param {number} [page=1]
   * @param {number} [per_page=20]
   * @returns {Promise<Object>}
   */
  async browse(page: number = 1, per_page: number = 20) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts?page=:page&per_page=:per_page',
        data: {},
        params: { accountId: null, page, per_page },
      },
      this
    );
  }

  /**
   * Get information about a specific account.
   *
   * @param {string} accountId
   * @returns {Promise<Object>}
   */
  async read(accountId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { accountId },
      },
      this
    );
  }

  /**
   * Update an existing account.
   *
   * @param {string} accountId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async edit(accountId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: undefined,
        data,
        params: { accountId },
      },
      this
    );
  }
}

export default Accounts;
