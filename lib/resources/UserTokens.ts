import CloudflareApiClient from '../Client';
// Import dependencies
import Resource from '../Resource';

/**
 * UserTokens represents the /user/tokens API endpoint.
 *
 * @class UserTokens
 * @extends Resource
 */
class UserTokens extends Resource {
  public includeBasic: any;

  public path: string;

  /**
   * Constructor for the UserTokens class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'user/tokens';
    this.includeBasic = ['browse', 'read', 'edit', 'add', 'del'];
  }

  /**
   * roll rotates the token secret.
   *
   * @function roll
   * @memberof UserTokens
   * @instance UserTokens
   * @async
   * @param {string} id - The User Token ID.
   * @returns {Promise<Object>} The User Token response object.
   */
  async roll(id: string) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: `user/tokens/${id}/value`,
      },
      this
    );
  }

  /**
   * verify the token secret.
   *
   * @function verify
   * @memberof UserTokens
   * @instance UserTokens
   * @async
   * @returns {Promise<Object>} The User Token response object.
   */
  async verify() {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'user/tokens/verify',
      },
      this
    );
  }

  /**
   * browsePermissionGroups browse all available permission groups.
   *
   * @function browsePermissionGroups
   * @memberof UserTokens
   * @instance UserTokens
   * @async
   * @returns {Promise<Object>} The response object.
   */
  async browsePermissionGroups() {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'user/tokens/permission_groups',
      },
      this
    );
  }

  /**
   * browse allows for listing user tokens.
   *
   * @function browse
   * @memberof UserTokens
   * @instance UserTokens
   * @async
   * @returns {Promise<Object>} The User Token response object.
   */
  async browse() {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'user/tokens',
      },
      this
    );
  }

  /**
   * read allows for retrieving a user token's details.
   *
   * @function read
   * @memberof UserTokens
   * @instance UserTokens
   * @async
   * @param {string} id - The User Token ID.
   * @returns {Promise<Object>} The User Token object.
   */
  async read(id: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `user/tokens/${id}`,
      },
      this
    );
  }

  /**
   * add allows for creating a user token.
   *
   * @function add
   * @memberof UserTokens
   * @instance UserTokens
   * @async
   * @param {Object} token - The new user token object.
   * @returns {Promise<Object>} The created user token object.
   */
  async add(token: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'user/tokens',
        data: token,
      },
      this
    );
  }

  /**
   * del allows for deleting a user token.
   *
   * @function del
   * @memberof UserTokens
   * @instance UserTokens
   * @async
   * @param {string} id - The user token ID to delete.
   * @returns {Promise<Object>} The deleted user token object.
   */
  async del(id: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `user/tokens/${id}`,
      },
      this
    );
  }
}

// Export the UserTokens class
export default UserTokens;
