// Import dependencies
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
   * @instance PageRules
   * @async
   * @param {string} zoneId
   * @returns {Promise<Object>} The page rules browse response object.
   */
  async browse(zoneId) {
    const params = {zoneId};
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: this.path,
        params,
      },
      this
    );
  }

  /**
   * read allows for retrieving a specific page rule.
   *
   * @function read
   * @memberof PageRules
   * @instance PageRules
   * @async
   * @param {string} zoneId
   * @param {string} id - The page rule ID.
   * @returns {Promise<Object>} The page rule response object.
   */
  async read(zoneId, id) {
    const params = {zoneId, id};
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/pagerules/:id',
        params,
      },
      this
    );
  }

  /**
   * edit allows for modifying a specific page rule.
   *
   * @function edit
   * @memberof PageRules
   * @instance PageRules
   * @async
   * @param {string} zoneId
   * @param {string} id - The page rule ID.
   * @param {Object} page_rule - The modified page rule object.
   * @returns {Promise<Object>} The page rule response object.
   */
  async edit(zoneId, id, page_rule) {
    const params = {zoneId, id};
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: 'zones/:zoneId/pagerules/:id',
        data: page_rule,
        params,
      },
      this
    );
  }

  /**
   * add allows for creating a new page rule.
   *
   * @function add
   * @memberof PageRules
   * @instance PageRules
   * @async
   * @param {string} zoneId
   * @param {Object} page_rule - The new page rule object.
   * @returns {Promise<Object>} The page rule response object.
   */
  async add(zoneId, page_rule) {
    const params = {zoneId};
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: this.path,
        data: page_rule,
        params,
      },
      this
    );
  }

  /**
   * del allows for removing a page rule.
   *
   * @function del
   * @memberof PageRules
   * @instance PageRules
   * @async
   * @param {string} zoneId
   * @param {string} id - The page rule ID to delete.
   * @returns {Promise<Object>} The page rule response object.
   */
  async del(zoneId, id) {
    const params = {zoneId, id};
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `zones/:zoneId/pagerules/:id`,
        params,
      },
      this
    );
  }
}

// Export the PageRules class
module.exports = PageRules;
