import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class Filters extends Resource {
  public path: string;
  protected hasBrokenPatch: boolean;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/filters';
    this.hasBrokenPatch = true;
  }

  /**
   * Allows for listing all the zones.
   *
   * @param {string} zoneId - The zone ID.
   * @returns {Promise<Object>} The zone browse response object.
   */
  async browse(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/filters',
        params: { zoneId },
      },
      this
    );
  }

  /**
   * Allows for retrieving a specific zone.
   *
   * @param {string} zoneId
   * @param {string} filterId - The modified zone object.
   * @returns {Promise<Object>} The zone response object.
   */
  async read(zoneId: string, filterId: any) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/filters/:filterId',
        params: { zoneId, filterId },
      },
      this
    );
  }

  /**
   * Allows for modifying a specific zone.
   *
   * @param {string} id - The zone ID.
   * @param {string} filterId - The rule ID.
   * @param {Object} rule - The modified rule object.
   * @returns {Promise<Object>} The zone response object.
   */
  async edit(id: string, filterId: any, rule: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: 'zones/:id/filters/:filterId',
        data: rule,
        params: { id, filterId },
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
  async add(zoneId: string, ruleId: string, rules: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/filters/:ruleId',
        data: rules,
        params: { zoneId, ruleId },
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
  async del(zoneId: string, filterId: any) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: 'zones/:zoneId/filters/:filterId',
        params: { zoneId, filterId },
      },
      this
    );
  }
}

export default Filters;
