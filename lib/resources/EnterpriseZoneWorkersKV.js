'use strict';

const Resource = require('../Resource');

class EnterpriseZoneWorkersKV extends Resource {
  constructor(apiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/storage/kv/namespaces/:namespaceId';

    /**
     * browse allows for listing all the keys of a namespace
     *
     * @function browse
     * @memberof EnterpriseZoneWorkersKV
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} namespaceId - The namespace ID
     * @returns {Promise<Object>} The KV response object.
     */
  }

  /**
   * add allows for creating a key-value pair in a namespace
   *
   * @function add
   * @memberof EnterpriseZoneWorkersKV
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} namespaceId - The namespace ID
   * @param {string} id - The key to store into
   * @param {string} value - The value to store
   * @returns {Promise<Object>} The KV response object
   */
  add(accountId, namespaceId, id, value) {
    return this.apiClient.request(
      {
        method: 'PUT',
        path: `values/${id}`,
        data: value,
        params: {accountId, namespaceId},
      },
      this
    );
  }

  /**
   * read allows for reading the contents of key in a namespace
   *
   * @function read
   * @memberof EnterpriseZoneWorkersKV
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} namespaceId - The namespace ID
   * @param {string} id - The key to read from
   * @returns {Promise<Object>} The KV response object
   */
  read(accountId, namespaceId, id) {
    return this.apiClient.request(
      {
        method: 'GET',
        path: `values/${id}`,
        json: false,
        contentType: 'text/plain',
        params: {accountId, namespaceId},
      },
      this
    );
  }

  /**
   * del allows for deleting a key and its contents in a namespace
   *
   * @function del
   * @memberof EnterpriseZoneWorkersKV
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} namespaceId - The namespace ID
   * @param {string} id - The key to delete
   * @returns {Promise<Object>} The KV response object
   */
  del(accountId, namespaceId, id) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        path: `values/${id}`,
        params: {accountId, namespaceId},
      },
      this
    );
  }

  /**
   * addMulti allows for creating multiple key-value pairs in a namespace
   *
   * @function addMulti
   * @memberof EnterpriseZoneWorkersKV
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} namespaceId - The namespace ID
   * @param {Array<Object>} data - An array containing key-value pair Objects to add
   * @returns {Promise<Object>} The KV response object
   */
  addMulti(accountId, namespaceId, data) {
    return this.apiClient.request(
      {
        method: 'PUT',
        path: 'bulk',
        data: data,
        params: {accountId, namespaceId},
      },
      this
    );
  }

  /**
   * delMulti allows for deleting multiple key-value pairs in a namespace
   *
   * @function delMulti
   * @memberof EnterpriseZoneWorkersKV
   * @instance
   * @async
   * @param {string} accountId - The account ID
   * @param {string} namespaceId - The namespace ID
   * @param {Array<String>} data - The array with keys to delete
   * @returns {Promise<Object>} The KV response object
   */
  delMulti(accountId, namespaceId, data) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        path: 'bulk',
        data: data,
        params: {accountId, namespaceId},
      },
      this
    );
  }
}

module.exports = EnterpriseZoneWorkersKV;
