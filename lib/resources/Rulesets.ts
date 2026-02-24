import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class Rulesets extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/rulesets';
  }

  /**
   * browse all rulesets for a zone.
   *
   * @param {string} zoneId - The zone ID.
   * @returns {Promise<Object>} The rulesets response object.
   */
  async browse(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/rulesets',
        params: { zoneId },
      },
      this
    );
  }

  /**
   * read a specific ruleset.
   *
   * @param {string} zoneId
   * @param {string} rulesetId - The ruleset ID.
   * @returns {Promise<Object>} The ruleset response object.
   */
  async read(zoneId: string, rulesetId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/rulesets/:rulesetId',
        params: { zoneId, rulesetId },
      },
      this
    );
  }

  /**
   * edit a specific ruleset.
   *
   * @param {string} zoneId - The zone ID.
   * @param {string} rulesetId - The ruleset ID.
   * @param {Object} ruleset - The ruleset object.
   * @returns {Promise<Object>} The response object.
   */
  async edit(zoneId: string, rulesetId: string, ruleset: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: 'zones/:zoneId/rulesets/:rulesetId',
        data: ruleset,
        params: { zoneId, rulesetId },
      },
      this
    );
  }

  /**
   * add a new ruleset.
   *
   * @param {string} zoneId
   * @param {Object} ruleset - The new ruleset object.
   * @returns {Promise<Object>} The ruleset response object.
   */
  async add(zoneId: string, ruleset: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/rulesets',
        data: ruleset,
        params: { zoneId },
      },
      this
    );
  }

  /**
   * del a ruleset.
   *
   * @param {string} zoneId
   * @param {string} rulesetId
   * @returns {Promise<Object>} The response object.
   */
  async del(zoneId: string, rulesetId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: 'zones/:zoneId/rulesets/:rulesetId',
        params: { zoneId, rulesetId },
      },
      this
    );
  }
}

export default Rulesets;
