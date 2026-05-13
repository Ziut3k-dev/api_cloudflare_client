import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class AccountRoles extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/roles/:roleId';
  }

  /**
   * List all roles for an account.
   *
   * @param {string} accountId
   * @returns {Promise<Object>}
   */
  async browse(accountId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts/:accountId/roles',
        data: {},
        params: { accountId, roleId: null },
      },
      this
    );
  }

  /**
   * Get information about a specific role for an account.
   *
   * @param {string} accountId
   * @param {string} roleId
   * @returns {Promise<Object>}
   */
  async read(accountId: string, roleId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { accountId, roleId },
      },
      this
    );
  }
}

export default AccountRoles;
