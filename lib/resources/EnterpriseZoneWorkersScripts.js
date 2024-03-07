// Import dependencies
const Resource = require('../Resource');

/**
 * EnterpriseZoneWorkersScripts represents the accounts/:accountId/workers/scripts API endpoint.
 *
 * @class EnterpriseZoneWorkersScripts
 * @extends Resource
 */
class EnterpriseZoneWorkersScripts extends Resource {
  /**
   * Constructor for the EnterpriseZoneWorkersScripts class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/workers/scripts';
    this.includeBasic = ['browse', 'del'];
  }

  /**
   * read retrieves a single workers script.
   *
   * @function read
   * @memberof EnterpriseZoneWorkersScripts
   * @instance EnterpriseZoneWorkersScripts
   * @async
   * @param {string} accountId - The enterprise account ID.
   * @param {string} name - The script name.
   * @returns {Promise<Object>} The workers script response object.
   */
  async read(accountId, name) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `${this.path}/${name}`,
        params: {accountId},
        json: false,
      },
      this
    );
  }

  /**
   * edit uploads a new version of a workers script.
   *
   * @function edit
   * @memberof EnterpriseZoneWorkersScripts
   * @instance EnterpriseZoneWorkersScripts
   * @async
   * @param {string} accountId - The enterprise account ID.
   * @param {string} name - The script name.
   * @param {string} script - The new script.
   * @returns {Promise<Object>} The response object.
   */
  async edit(accountId, name, script) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: `${this.path}/${name}`,
        data: script,
        contentType: 'application/javascript',
        params: {accountId},
      },
      this
    );
  }
}

// Export the EnterpriseZoneWorkersScripts class
module.exports = EnterpriseZoneWorkersScripts;
