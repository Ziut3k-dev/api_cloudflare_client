import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class Turnstile extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/challenges/widgets/:sitekey';
  }

  /**
   * Lists all Turnstile widgets for an account.
   *
   * @param {string} accountId
   * @param {number} [page=1]
   * @param {number} [per_page=25]
   * @returns {Promise<Object>}
   */
  async browse(accountId: string, page: number = 1, per_page: number = 25) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts/:accountId/challenges/widgets?page=:page&per_page=:per_page',
        data: {},
        params: { accountId, sitekey: null, page, per_page },
      },
      this
    );
  }

  /**
   * Fetches the details of a Turnstile widget.
   *
   * @param {string} accountId
   * @param {string} sitekey
   * @returns {Promise<Object>}
   */
  async read(accountId: string, sitekey: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { accountId, sitekey },
      },
      this
    );
  }

  /**
   * Creates a new Turnstile widget.
   *
   * @param {string} accountId
   * @param {Object} data - { name, domains[], mode, bot_fight_mode?, clearance_level?, offlabel? }
   * @returns {Promise<Object>}
   */
  async add(accountId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/challenges/widgets',
        data,
        params: { accountId, sitekey: null },
      },
      this
    );
  }

  /**
   * Updates the configuration of a widget.
   *
   * @param {string} accountId
   * @param {string} sitekey
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async edit(accountId: string, sitekey: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: undefined,
        data,
        params: { accountId, sitekey },
      },
      this
    );
  }

  /**
   * Deletes a Turnstile widget.
   *
   * @param {string} accountId
   * @param {string} sitekey
   * @returns {Promise<Object>}
   */
  async del(accountId: string, sitekey: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { accountId, sitekey },
      },
      this
    );
  }

  /**
   * Generate a new secret key for a given widget.
   *
   * @param {string} accountId
   * @param {string} sitekey
   * @param {Object} [data] - { invalidate_immediately? }
   * @returns {Promise<Object>}
   */
  async rotateSecret(accountId: string, sitekey: string, data: any = {}) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/challenges/widgets/:sitekey/rotate_secret',
        data,
        params: { accountId, sitekey },
      },
      this
    );
  }
}

export default Turnstile;
