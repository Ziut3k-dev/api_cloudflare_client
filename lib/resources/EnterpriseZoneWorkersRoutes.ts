import CloudflareApiClient from '../Client';
// Import dependencies
import Resource from '../Resource';

/**
 * EnterpriseZoneWorkersRoutes represents the zones/:zoneId/workers/routes API endpoint.
 *
 * @class EnterpriseZoneWorkersRoutes
 * @extends Resource
 */
class EnterpriseZoneWorkersRoutes extends Resource {
  public includeBasic: any;

  public path: string;

  /**
   * Constructor for the EnterpriseZoneWorkersRoutes class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/workers/routes';
    this.includeBasic = ['browse', 'read', 'add', 'del'];
  }

  /**
   * browse allows for listing all of a zone's workers routes.
   *
   * @function browse
   * @memberof EnterpriseZoneWorkersRoutes
   * @instance EnterpriseZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @returns {Promise<Object>} The route browse response object.
   */
  async browse(zoneId: string) {
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
   * read allows for retrieving a specific zone's workers route.
   *
   * @function read
   * @memberof EnterpriseZoneWorkersRoutes
   * @instance EnterpriseZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} id - The route ID.
   * @returns {Promise<Object>} The route response object.
   */
  async read(zoneId: string, id: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `${this.path}/${id}`,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * edit allows for modifying a specific zone's workers route.
   *
   * @function edit
   * @memberof EnterpriseZoneWorkersRoutes
   * @instance EnterpriseZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} id - The route ID.
   * @param {Object} config - The modified route object.
   * @returns {Promise<Object>} The custom hostname response object.
   */
  async edit(zoneId: string, id: string, config: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: `${this.path}/${id}`,
        data: config,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * add allows for creating a workers route.
   *
   * @function add
   * @memberof EnterpriseZoneWorkersRoutes
   * @instance EnterpriseZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {Object} config - The new route object.
   * @returns {Promise<Object>} The custom route response object.
   */
  async add(zoneId: string, config: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: this.path,
        data: config,
        params: {zoneId},
      },
      this
    );
  }

  /**
   * del allows for removing a workers route.
   *
   * @function del
   * @memberof EnterpriseZoneWorkersRoutes
   * @instance EnterpriseZoneWorkersRoutes
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} id - The route ID to delete.
   * @returns {Promise<Object>} The custom route response object.
   */
  async del(zoneId: string, id: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `${this.path}/${id}`,
        params: {zoneId},
      },
      this
    );
  }
}

// Export the EnterpriseZoneWorkersRoutes class
export default EnterpriseZoneWorkersRoutes;
