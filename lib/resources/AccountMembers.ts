import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class AccountMembers extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/members/:memberId';
  }

  /**
   * List all members of an account.
   *
   * @param {string} accountId
   * @returns {Promise<Object>}
   */
  async browse(accountId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts/:accountId/members',
        data: {},
        params: { accountId, memberId: null },
      },
      this
    );
  }

  /**
   * Get information about a specific member of an account.
   *
   * @param {string} accountId
   * @param {string} memberId
   * @returns {Promise<Object>}
   */
  async read(accountId: string, memberId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { accountId, memberId },
      },
      this
    );
  }

  /**
   * Add a member to an account.
   *
   * @param {string} accountId
   * @param {Object} data - { email, roles[] }
   * @returns {Promise<Object>}
   */
  async add(accountId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/members',
        data,
        params: { accountId, memberId: null },
      },
      this
    );
  }

  /**
   * Modify the roles of a member of an account.
   *
   * @param {string} accountId
   * @param {string} memberId
   * @param {Object} data - { roles[] }
   * @returns {Promise<Object>}
   */
  async edit(accountId: string, memberId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: undefined,
        data,
        params: { accountId, memberId },
      },
      this
    );
  }

  /**
   * Remove a member from an account.
   *
   * @param {string} accountId
   * @param {string} memberId
   * @returns {Promise<Object>}
   */
  async del(accountId: string, memberId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { accountId, memberId },
      },
      this
    );
  }
}

export default AccountMembers;
