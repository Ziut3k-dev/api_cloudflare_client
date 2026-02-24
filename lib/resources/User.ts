import CloudflareApiClient from '../Client';
// Import dependencies
import Resource from '../Resource';

/**
 * User represents the /user API endpoint.
 *
 * @class User
 * @extends Resource
 */
class User extends Resource {
  public path: string;

  /**
   * Constructor for the User class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'user';
  }

  /**
   * read returns the current user object.
   *
   * @function read
   * @memberof User
   * @instance User
   * @async
   * @returns {Promise<Object>} The user object.
   */
  async read() {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: this.path,
      },
      this
    );
  }

  /**
   * edit allows for modification of the current user.
   *
   * @function edit
   * @memberof User
   * @instance User
   * @async
   * @param {Object} user - The modified user object.
   * @returns {Promise<Object>} The user object.
   */
  async edit(user: any) {
    return this.apiClient.request(
      {
        method: 'PATCH',
        uriPath: this.path,
        data: user,
      },
      this
    );
  }
}

// Export the User class
export default User;
