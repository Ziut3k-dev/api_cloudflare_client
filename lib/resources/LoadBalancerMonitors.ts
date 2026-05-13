import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class LoadBalancerMonitors extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/load_balancers/monitors/:monitorId';
  }

  /**
   * Lists all configured monitors for a given account.
   *
   * @param {string} accountId
   * @returns {Promise<Object>}
   */
  async browse(accountId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts/:accountId/load_balancers/monitors',
        data: {},
        params: { accountId, monitorId: null },
      },
      this
    );
  }

  /**
   * Fetches a single configured monitor for an account.
   *
   * @param {string} accountId
   * @param {string} monitorId
   * @returns {Promise<Object>}
   */
  async read(accountId: string, monitorId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { accountId, monitorId },
      },
      this
    );
  }

  /**
   * Creates a new monitor.
   *
   * @param {string} accountId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async add(accountId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/load_balancers/monitors',
        data,
        params: { accountId, monitorId: null },
      },
      this
    );
  }

  /**
   * Modifies a configured monitor.
   *
   * @param {string} accountId
   * @param {string} monitorId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async edit(accountId: string, monitorId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: undefined,
        data,
        params: { accountId, monitorId },
      },
      this
    );
  }

  /**
   * Deletes a configured monitor.
   *
   * @param {string} accountId
   * @param {string} monitorId
   * @returns {Promise<Object>}
   */
  async del(accountId: string, monitorId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { accountId, monitorId },
      },
      this
    );
  }

  /**
   * Preview pool health for a monitor.
   *
   * @param {string} accountId
   * @param {string} monitorId
   * @param {Object} data - Pools to preview
   * @returns {Promise<Object>}
   */
  async preview(accountId: string, monitorId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/load_balancers/monitors/:monitorId/preview',
        data,
        params: { accountId, monitorId },
      },
      this
    );
  }

  /**
   * List references to a monitor.
   *
   * @param {string} accountId
   * @param {string} monitorId
   * @returns {Promise<Object>}
   */
  async references(accountId: string, monitorId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts/:accountId/load_balancers/monitors/:monitorId/references',
        data: {},
        params: { accountId, monitorId },
      },
      this
    );
  }
}

export default LoadBalancerMonitors;
