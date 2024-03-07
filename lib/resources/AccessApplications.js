'use strict';

const Resource = require('../Resource');

class AccessApplications extends Resource {
  constructor(apiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/access/apps';
    this.includeBasic = ['browse', 'read', 'edit', 'add', 'del'];

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
  read(accountId, id) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `/${id}`,
        data: {},
        params: {accountId},
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
   * @param {Object} application - The modified Access Applications object
   * @returns {Promise<Object>} The Access Applications response object.
   */
  edit(accountId, application) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: `/${application.id}`,
        data: application,
        params: {accountId},
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
  add(accountId, application) {
    return this.apiClient.request(
      {
        method: 'POST',
        data: application,
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
  del(accountId, id) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `/${id}`,
        params: {accountId},
      },
      this
    );
  }
}

module.exports = AccessApplications;
