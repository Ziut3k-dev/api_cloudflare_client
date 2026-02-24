import CloudflareApiClient from '../Client';
// Import dependencies
import Resource from '../Resource';

/**
 * ZoneWorkers represents the /zones/:zoneId/workers API endpoint.
 *
 * @class ZoneWorkers
 * @extends Resource
 */
class ZoneWorkers extends Resource {
  public path: string;

  /**
   * Constructor for the ZoneWorkers class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/workers';
  }

  /**
   * validate allows for validating a workers script.
   *
   * @function validate
   * @memberof ZoneWorkers
   * @instance ZoneWorkers
   * @async
   * @param {string} zoneId - The zone ID.
   * @param {string} script - The worker script.
   * @returns {Promise<Object>} The validate response object.
   */
  async validate(zoneId: string, script: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: `${this.path}/validate`,
        contentType: 'application/javascript',
        data: script,
        params: {zoneId},
      },
      this
    );
  }
}

// Export the ZoneWorkers class
export default ZoneWorkers;
