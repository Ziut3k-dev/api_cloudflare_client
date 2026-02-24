import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class AccessApplications extends Resource {
  public includeBasic: any;

  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/access/apps';
    this.includeBasic = ['browse', 'read', 'edit', 'add', 'del'];
  }

  /**
   * browse allows for listing all Access Applications for an account
   *
   * @function browse
   * @memberof AccessApplications
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @returns {Promise<Object>} The Access Applications response object.
   */
  async browse(accountId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: {accountId},
      },
      this
    );
  }

  /**
   * read allows for retrieving the specified Access Applications
   *
   * @function read
   * @memberof AccessApplications
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} id - The Access Applications ID
   * @returns {Promise<Object>} The Access Applications object.
   */
  async read(accountId: string, id: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `accounts/:accountId/access/apps/:id`,
        params: {accountId, id},
      },
      this
    );
  }

  /**
   * edit allows for modifying a specific Access Applications
   *
   * @function edit
   * @memberof AccessApplications
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} id
   * @param {Object} application - The modified Access Applications object
   * @returns {Promise<Object>} The Access Applications response object.
   */
  async edit(accountId: string, id: string, application: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: `accounts/:accountId/access/apps/:id`,
        data: application,
        params: {accountId, id},
      },
      this
    );
  }

  /**
   * add allows for creating a new Access Applications for an account.
   *
   * @function add
   * @memberof AccessApplications
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {Object} application - The new Access Applications object
   * @returns {Promise<Object>} The created Access Applications object.
   */
  async add(accountId: string, application: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        data: application,
        uriPath: undefined,
        params: {accountId},
      },
      this
    );
  }

  /**
   * del allows for deleting the specified Application
   *
   * @function del
   * @memberof AccessApplications
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} id - The Access Applications ID
   * @returns {Promise<Object>} The deleted Access Applications object.
   */
  async del(accountId: string, id: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: 'accounts/:accountId/access/apps/:id',
        params: {accountId, id},
      },
      this
    );
  }
}

export default AccessApplications;
