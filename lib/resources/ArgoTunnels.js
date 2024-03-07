'use strict';

const Resource = require('../Resource');

class ArgoTunnels extends Resource {
  constructor(apiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/tunnels';
  }

  /**
   * browse allows for listing all Argo Tunnels for an account
   *
   * @function browse
   * @memberof ArgoTunnels
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @returns {Promise<Object>} The Argo Tunnels response object.
   */
  async browse(accountId) {
    return await this.apiClient.request(
      {
        method: 'GET',
        uriPath: null,
        data: {},
        params: {accountId},
      },
      this
    );
  }

  /**
   * clean removes stale connection resources from an Argo Tunnel
   *
   * @function clean
   * @memberof ArgoTunnels
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} id - The tunnel ID being modified
   * @returns {Promise<Object>} The response object.
   */
  clean(accountId, id) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `accounts/:accountId/tunnels/:id/connections`,
        params: {accountId, id},
      },
      this
    );
  }

  /**
   * read allows for retrieving the specified Argo Tunnel
   *
   * @function read
   * @memberof ArgoTunnels
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} id - The Argo Tunnel ID
   * @returns {Promise<Object>} The Argo Tunnel object.
   */
  read(accountId, id) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `accounts/:accountId/tunnels/:id`,
        params: {accountId, id},
      },
      this
    );
  }

  /**
   * add allows for creating a new Argo Tunnel for an account.
   *
   * @function add
   * @memberof ArgoTunnels
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {Object} tunnel - The new Argo Tunnel object
   * @returns {Promise<Object>} The created Argo Tunnel object.
   */
  add(accountId, tunnel) {
    return this.apiClient.request(
      {
        method: 'POST',
        data: tunnel,
        params: {accountId},
      },
      this
    );
  }

  /**
   * del allows for deleting the specified Tunnel
   *
   * @function del
   * @memberof ArgoTunnels
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} id - The Argo Tunnel ID
   * @returns {Promise<Object>} The deleted Argo Tunnel object.
   */
  del(accountId, id) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `accounts/:accountId/tunnels/:id`,
        params: {accountId, id},
      },
      this
    );
  }
}

module.exports = ArgoTunnels;
