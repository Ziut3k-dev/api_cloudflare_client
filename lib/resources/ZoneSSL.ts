import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class ZoneSSL extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/ssl/certificate_packs/:certPackId';
  }

  /**
   * List all SSL certificate packs for a zone.
   *
   * @param {string} zoneId
   * @returns {Promise<Object>}
   */
  async browse(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/ssl/certificate_packs',
        data: {},
        params: { zoneId, certPackId: null },
      },
      this
    );
  }

  /**
   * Get a certificate pack.
   *
   * @param {string} zoneId
   * @param {string} certPackId
   * @returns {Promise<Object>}
   */
  async read(zoneId: string, certPackId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { zoneId, certPackId },
      },
      this
    );
  }

  /**
   * Order a new certificate pack.
   *
   * @param {string} zoneId
   * @param {Object} data - { type, hosts[] }
   * @returns {Promise<Object>}
   */
  async add(zoneId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/ssl/certificate_packs/order',
        data,
        params: { zoneId, certPackId: null },
      },
      this
    );
  }

  /**
   * For a certificate pack, change the validation method.
   *
   * @param {string} zoneId
   * @param {string} certPackId
   * @param {Object} data - { validation_method }
   * @returns {Promise<Object>}
   */
  async edit(zoneId: string, certPackId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PATCH',
        uriPath: undefined,
        data,
        params: { zoneId, certPackId },
      },
      this
    );
  }

  /**
   * Delete an advanced certificate pack.
   *
   * @param {string} zoneId
   * @param {string} certPackId
   * @returns {Promise<Object>}
   */
  async del(zoneId: string, certPackId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { zoneId, certPackId },
      },
      this
    );
  }
}

export default ZoneSSL;
