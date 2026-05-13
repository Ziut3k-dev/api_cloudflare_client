import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class LoadBalancers extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/load_balancers/:lbId';
  }

  /**
   * Lists load balancers configured for a zone.
   *
   * @param {string} zoneId
   * @returns {Promise<Object>}
   */
  async browse(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/load_balancers',
        data: {},
        params: { zoneId, lbId: null },
      },
      this
    );
  }

  /**
   * Fetches a load balancer.
   *
   * @param {string} zoneId
   * @param {string} lbId
   * @returns {Promise<Object>}
   */
  async read(zoneId: string, lbId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { zoneId, lbId },
      },
      this
    );
  }

  /**
   * Creates a new load balancer.
   *
   * @param {string} zoneId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async add(zoneId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/load_balancers',
        data,
        params: { zoneId, lbId: null },
      },
      this
    );
  }

  /**
   * Updates a configured load balancer.
   *
   * @param {string} zoneId
   * @param {string} lbId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async edit(zoneId: string, lbId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: undefined,
        data,
        params: { zoneId, lbId },
      },
      this
    );
  }

  /**
   * Deletes a load balancer.
   *
   * @param {string} zoneId
   * @param {string} lbId
   * @returns {Promise<Object>}
   */
  async del(zoneId: string, lbId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { zoneId, lbId },
      },
      this
    );
  }
}

export default LoadBalancers;
