'use strict';

const Resource = require('../Resource');

class Zones extends Resource {
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zone/:id/firewall/rules/:ruleId';
    this.hasBrokenPatch = true;
    this.includeBasic = ['browse', 'read', 'edit', 'add', 'del'];
  }

  /**
   * Allows for listing all the zones.
   *
   * @param {string} id - The zone ID.
   * @returns {Promise<Object>} The zone browse response object.
   */
  async browse(id) {
    return this.apiClient.request(
      {
        method: 'GET',
        path: `zone/${id}/firewall/rules/:ruleId`,
      },
      this
    );
  }

  /**
   * Allows for retrieving a specific zone.
   *
   * @param {string} id - The zone ID.
   * @param {string} ruleId - The modified zone object.
   * @returns {Promise<Object>} The zone response object.
   */
  async read(id, ruleId) {
    return this.apiClient.request(
      {
        method: 'GET',
        path: `zone/${id}/firewall/rules/${ruleId}`,
      },
      this
    );
  }

  /**
   * Allows for modifying a specific zone.
   *
   * @param {string} id - The zone ID.
   * @param {string} ruleId - The rule ID.
   * @param {Object} rule - The modified rule object.
   * @returns {Promise<Object>} The zone response object.
   */
  async edit(id, ruleId, rule) {
    return this.apiClient.request(
      {
        method: 'PUT',
        path: `zone/${id}/firewall/rules/${ruleId}`,
        data: rule,
      },
      this
    );
  }

  /**
   * Allows for creating a new zone.
   *
   * @param id
   * @param ruleId
   * @param {Object} zone - The new zone object.
   * @returns {Promise<Object>} The zone response object.
   */
  async add(id, ruleId, zone) {
    const params = {};
    params.id = id;
    params.ruleId = ruleId;
    return this.apiClient.request(
      {
        method: 'POST',
        path: 'zone/:id/firewall/rules/:ruleId',
        data: zone,
        params: params,
      },
      this
    );
  }

  /**
   * Allows for removing a new zone.
   *
   * @param {string} id - The zone ID to delete.
   * @param ruleId
   * @returns {Promise<Object>} The zone response object.
   */
  async del(id, ruleId) {
    const params = {};
    params.id = id;
    params.ruleId = ruleId;
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `zone/:id/firewall/rules/:ruleId`,
        params: params,
      },
      this
    );
  }
}

module.exports = Zones;
