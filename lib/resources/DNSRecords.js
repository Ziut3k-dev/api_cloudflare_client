'use strict';

const Resource = require('../Resource');

class DNSRecords extends Resource {
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/dns_records';
    this.includeBasic = ['browse', 'read', 'edit', 'add', 'del'];

    /**
     * edit allows for modification of the specified DNS Record
     *
     * @function edit
     * @memberof DNSRecords
     * @instance
     * @async
     * @param {string} zoneId - The zone ID
     * @param {string} id - The DNS record ID being modified
     * @param {Object} record - The modified DNS record object
     * @returns {Promise<Object>} The DNS record object.
     */
  }

  /**
   * browse allows for listing all DNS Records for a zone
   *
   * @function browse
   * @memberof DNSRecords
   * @instance
   * @async
   * @param {string} zoneId - The zone ID
   * @returns {Promise<Object>} The DNS browser response object.
   */
  async browse(zoneId) {
    return await this.apiClient.request(
      {
        method: 'GET',
        uriPath: null,
        data: {},
        params: {zoneId},
      },
      this
    );
  }

  /**
   * edit allows for modification of the specified DNS Record
   *
   * @function edit
   * @memberof DNSRecords
   * @instance
   * @async
   * @param {string} zoneId - The zone ID
   * @param {string} id - The DNS record ID being modified
   * @param {Object} record - The modified DNS record object
   * @returns {Promise<Object>} The DNS record object.
   */
  edit(zoneId, id, record) {
    return this.apiClient.request(
      {
        method: 'PUT',
        path: `:id`,
        data: record,
        params: {zoneId, id},
      },
      this
    );
  }

  /**
   * export retrieves all of a zone's DNS Records in BIND configuration format.
   *
   * @function export
   * @memberof DNSRecords
   * @instance
   * @async
   * @param {string} zoneId - The zone ID
   * @returns {Promise<Object>} The DNS browser response object.
   */
  export(zoneId) {
    return this.apiClient.request(
      {
        method: 'GET',
        path: 'export',
        json: false,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * add allows for creating a new DNS record for a zone.
   *
   * @function add
   * @memberof DNSRecords
   * @instance
   * @async
   * @param {string} zoneId - The zone ID
   * @param {Object} record - The new DNS record object
   * @returns {Promise<Object>} The created DNS record object.
   */
  add(zoneId, record) {
    return this.apiClient.request(
      {
        method: 'POST',
        data: record,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * del allows for deleting the specified DNS Record
   *
   * @function del
   * @memberof DNSRecords
   * @instance
   * @async
   * @param {string} zoneId - The zone ID
   * @param {string} id - The DNS record ID to delete
   * @returns {Promise<Object>} The deleted DNS record object.
   */
  del(zoneId, id) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        path: `:id`,
        params: {zoneId, id},
      },
      this
    );
  }
}

module.exports = DNSRecords;
