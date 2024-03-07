// Import dependencies
const Resource = require('../Resource');

/**
 * ZoneSettings represents the /zones/:zoneID/settings API endpoint.
 *
 * @class ZoneSettings
 * @extends Resource
 */
class ZoneSettings extends Resource {
  /**
   * Constructor for the ZoneSettings class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/settings';
    this.includeBasic = ['browse', 'read', 'edit'];
  }

  /**
   * editAll allows for editing all the zone settings at once.
   *
   * @function editAll
   * @memberof ZoneSettings
   * @instance ZoneSettings
   * @async
   * @param {string} zoneId - The zone ID
   * @param {Object} settings - The modified zone settings
   * @returns {Promise<Object>} The response object
   */
  async editAll(zoneId, settings) {
    return this.apiClient.request(
      {
        method: 'PATCH',
        uriPath: this.path,
        params: {zoneId},
        data: settings,
      },
      this
    );
  }

  /**
   * browse allows for listing all the zone settings.
   *
   * @function browse
   * @memberof ZoneSettings
   * @instance ZoneSettings
   * @async
   * @param {string} zoneId - The zone ID
   * @returns {Promise<Object>} The zone settings response object.
   */
  async browse(zoneId) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: this.path,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * read retrieves a single zone setting.
   *
   * @function read
   * @memberof ZoneSettings
   * @instance ZoneSettings
   * @async
   * @param {string} zoneId - The zone ID
   * @param {string} setting - The setting name
   * @returns {Promise<Object>} The zone settings response object.
   */
  async read(zoneId, setting) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `${this.path}/:setting`,
        params: {zoneId, setting},
      },
      this
    );
  }

  /**
   * edit modifies a single zone setting.
   *
   * @function edit
   * @memberof ZoneSettings
   * @instance ZoneSettings
   * @async
   * @param {string} zoneId - The zone ID
   * @param {string} setting - The setting name
   * @param {string|Object} value - The new zone setting
   * @returns {Promise<Object>} The zone settings response object.
   */
  async edit(zoneId, setting, value) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: `${this.path}/:setting`,
        params: {zoneId, setting},
        data: value,
      },
      this
    );
  }
}

// Export the ZoneSettings class
module.exports = ZoneSettings;
