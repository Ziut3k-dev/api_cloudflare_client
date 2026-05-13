import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class RateLimits extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/rate_limits/:rateLimitId';
  }

  /**
   * Fetches the rate limits for a zone.
   *
   * @param {string} zoneId
   * @param {number} [page=1]
   * @param {number} [per_page=20]
   * @returns {Promise<Object>}
   */
  async browse(zoneId: string, page: number = 1, per_page: number = 20) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/rate_limits?page=:page&per_page=:per_page',
        data: {},
        params: { zoneId, rateLimitId: null, page, per_page },
      },
      this
    );
  }

  /**
   * Fetches the details of a rate limit.
   *
   * @param {string} zoneId
   * @param {string} rateLimitId
   * @returns {Promise<Object>}
   */
  async read(zoneId: string, rateLimitId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { zoneId, rateLimitId },
      },
      this
    );
  }

  /**
   * Creates a new rate limit for a zone.
   *
   * @param {string} zoneId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async add(zoneId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/rate_limits',
        data,
        params: { zoneId, rateLimitId: null },
      },
      this
    );
  }

  /**
   * Updates an existing rate limit.
   *
   * @param {string} zoneId
   * @param {string} rateLimitId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async edit(zoneId: string, rateLimitId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: undefined,
        data,
        params: { zoneId, rateLimitId },
      },
      this
    );
  }

  /**
   * Deletes an existing rate limit.
   *
   * @param {string} zoneId
   * @param {string} rateLimitId
   * @returns {Promise<Object>}
   */
  async del(zoneId: string, rateLimitId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { zoneId, rateLimitId },
      },
      this
    );
  }
}

export default RateLimits;
