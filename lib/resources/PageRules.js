// Import dependencies
const prototypal = require('es-class');
const auto = require('autocreate');
const Resource = require('../Resource');

/**
 * PageRules represents the /zones/:zoneID/pagerules API endpoint.
 *
 * @class PageRules
 * @extends Resource
 */
class PageRules extends Resource {
  /**
   * Constructor for the PageRules class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/pagerules';
    this.includeBasic = ['browse', 'read', 'edit', 'add', 'del'];
  }

  /**
   * browse allows for listing all the page rules.
   *
   * @function browse
   * @memberof PageRules
   * @instance
   * @async
   * @returns {Promise<Object>} The page rules browse response object.
   */
  async browse(zoneId) {
    const params = {};
    params.zoneId = zoneId;
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: this.path,
        params: params,
      },
      this
    );
  }

  /**
   * read allows for retrieving a specific page rule.
   *
   * @function read
   * @memberof PageRules
   * @instance
   * @async
   * @param {string} zoneId
   * @param {string} id - The page rule ID.
   * @returns {Promise<Object>} The page rule response object.
   */
  async read(zoneId, id) {
    const params = {};
    params.zoneId = zoneId;
    params.id = id;
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/pagerules/:id',
        params: params,
      },
      this
    );
  }

  /**
   * edit allows for modifying a specific page rule.
   *
   * @function edit
   * @memberof PageRules
   * @instance
   * @async
   * @param zoneId
   * @param {string} id - The page rule ID.
   * @param {Object} page_rule - The modified page rule object.
   * @returns {Promise<Object>} The page rule response object.
   */
  async edit(zoneId, id, page_rule) {
    const params = {};
    params.zoneId = zoneId;
    params.id = id;
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: 'zones/:zoneId/pagerules/:id',
        data: page_rule,
        params: params,
      },
      this
    );
  }

  /**
   * add allows for creating a new page rule.
   *
   * @function add
   * @memberof PageRules
   * @instance
   * @async
   * @param {string} zoneId
   * @param {Object} page_rule - The new page rule object.
   * @returns {Promise<Object>} The page rule response object.
   */
  async add(zoneId, page_rule) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: this.path,
        data: page_rule,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * del allows for removing a page rule.
   *
   * @function del
   * @memberof PageRules
   * @instance
   * @async
   * @param {string} zoneId
   * @param {string} id - The page rule ID to delete.
   * @returns {Promise<Object>} The page rule response object.
   */
  async del(zoneId, id) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `zones/:zoneId/pagerules/:id`,
        params: {id, zoneId},
      },
      this
    );
  }
}

// Export the PageRules class
module.exports = auto(prototypal(PageRules));
