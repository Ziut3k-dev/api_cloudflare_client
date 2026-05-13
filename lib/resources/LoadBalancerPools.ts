import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class LoadBalancerPools extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/load_balancers/pools/:poolId';
  }

  /**
   * Lists all configured pools.
   *
   * @param {string} accountId
   * @returns {Promise<Object>}
   */
  async browse(accountId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts/:accountId/load_balancers/pools',
        data: {},
        params: { accountId, poolId: null },
      },
      this
    );
  }

  /**
   * Fetches a single configured pool.
   *
   * @param {string} accountId
   * @param {string} poolId
   * @returns {Promise<Object>}
   */
  async read(accountId: string, poolId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { accountId, poolId },
      },
      this
    );
  }

  /**
   * Creates a new pool.
   *
   * @param {string} accountId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async add(accountId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/load_balancers/pools',
        data,
        params: { accountId, poolId: null },
      },
      this
    );
  }

  /**
   * Modifies a configured pool.
   *
   * @param {string} accountId
   * @param {string} poolId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async edit(accountId: string, poolId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: undefined,
        data,
        params: { accountId, poolId },
      },
      this
    );
  }

  /**
   * Deletes a configured pool.
   *
   * @param {string} accountId
   * @param {string} poolId
   * @returns {Promise<Object>}
   */
  async del(accountId: string, poolId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { accountId, poolId },
      },
      this
    );
  }

  /**
   * Fetches the health of a configured pool.
   *
   * @param {string} accountId
   * @param {string} poolId
   * @returns {Promise<Object>}
   */
  async health(accountId: string, poolId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts/:accountId/load_balancers/pools/:poolId/health',
        data: {},
        params: { accountId, poolId },
      },
      this
    );
  }

  /**
   * Preview pool health using provided monitor details.
   *
   * @param {string} accountId
   * @param {string} poolId
   * @param {Object} data - Monitor configuration to preview
   * @returns {Promise<Object>}
   */
  async preview(accountId: string, poolId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/load_balancers/pools/:poolId/preview',
        data,
        params: { accountId, poolId },
      },
      this
    );
  }
}

export default LoadBalancerPools;
