import CloudflareApiClient from '../Client';
import Resource from '../Resource';

/**
 * IPs represents the /ips API endpoint.
 *
 * @class CFIPs
 * @extends Resource
 */
class CFIPs extends Resource {
  public includeBasic: any;

  public path: string;

  /**
   * Constructor for the IPs class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'ips';
    this.includeBasic = ['browse'];
  }

  /**
   * browse returns a Promise of the current Cloudflare IPv4 and IPv6 addresses.
   *
   * @function browse
   * @memberof CFIPs
   * @instance CFIPs
   * @async
   * @returns {Promise<Object>} The IPv4 and IPv6 addresses
   * @example
   * // logs the fetched IP addresses
   * cf.ips.browse(console.log)
   */
  async browse() {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        params: {},
      },
      this
    );
  }
}

export default CFIPs;
