'use strict';

const Resource = require('../Resource');

class Firewall extends Resource {
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/firewall/rules/:ruleId';
    this.hasBrokenPatch = true;
  }

  /**
   * Allows for listing all the zones.
   *
   * @param {string} zoneId - The zone ID.
   * @returns {Promise<Object>} The zone browse response object.
   */
  async browse(zoneId) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/firewall/rules',
        params: {zoneId},
      },
      this
    );
  }

  /**
   * Allows for retrieving a specific zone.
   *
   * @param {string} zoneId
   * @param {string} ruleId - The modified zone object.
   * @returns {Promise<Object>} The zone response object.
   */
  async read(zoneId, ruleId) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/firewall/rules/:ruleId',
        params: {zoneId, ruleId},
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
        uriPath: 'zones/:id/firewall/rules/:ruleId',
        data: rule,
        params: {id, ruleId},
      },
      this
    );
  }

  /**
   * Allows for creating a new zone.
   *
   * @param {string} zoneId
   * @param {string} ruleId
   * @param {Object} zone - The new zone object.
   * @returns {Promise<Object>} The zone response object.
   */
  async add(zoneId, rules) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/firewall/rules',
        data: rules,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * Allows for removing a new zone.
   *
   * @param {string} zoneId - The zone ID to delete.
   * @param {string} ruleId
   * @returns {Promise<Object>} The zone response object.
   */
  async del(zoneId, ruleId) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: 'zones/:zoneId/firewall/rules/:ruleId',
        params: {zoneId, ruleId},
      },
      this
    );
  }
}

module.exports = Firewall;
