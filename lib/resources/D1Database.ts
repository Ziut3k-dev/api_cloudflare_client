import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class D1Database extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/d1/database/:databaseId';
  }

  /**
   * Returns a list of D1 databases.
   *
   * @param {string} accountId
   * @param {number} [page=1]
   * @param {number} [per_page=100]
   * @returns {Promise<Object>}
   */
  async browse(accountId: string, page: number = 1, per_page: number = 100) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'accounts/:accountId/d1/database?page=:page&per_page=:per_page',
        data: {},
        params: { accountId, databaseId: null, page, per_page },
      },
      this
    );
  }

  /**
   * Returns the specified D1 database.
   *
   * @param {string} accountId
   * @param {string} databaseId
   * @returns {Promise<Object>}
   */
  async read(accountId: string, databaseId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { accountId, databaseId },
      },
      this
    );
  }

  /**
   * Returns the created D1 database.
   *
   * @param {string} accountId
   * @param {Object} data - { name, primary_location_hint? }
   * @returns {Promise<Object>}
   */
  async add(accountId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/d1/database',
        data,
        params: { accountId, databaseId: null },
      },
      this
    );
  }

  /**
   * Deletes the specified D1 database.
   *
   * @param {string} accountId
   * @param {string} databaseId
   * @returns {Promise<Object>}
   */
  async del(accountId: string, databaseId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { accountId, databaseId },
      },
      this
    );
  }

  /**
   * Returns the query result.
   *
   * @param {string} accountId
   * @param {string} databaseId
   * @param {string} sql - SQL query
   * @param {any[]} [params] - Positional query parameters
   * @returns {Promise<Object>}
   */
  async query(accountId: string, databaseId: string, sql: string, params?: any[]) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/d1/database/:databaseId/query',
        data: { sql, params },
        params: { accountId, databaseId },
      },
      this
    );
  }

  /**
   * Returns the query result as a raw response.
   *
   * @param {string} accountId
   * @param {string} databaseId
   * @param {string} sql - SQL query
   * @param {any[]} [params] - Positional query parameters
   * @returns {Promise<Object>}
   */
  async raw(accountId: string, databaseId: string, sql: string, params?: any[]) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'accounts/:accountId/d1/database/:databaseId/raw',
        data: { sql, params },
        params: { accountId, databaseId },
      },
      this
    );
  }
}

export default D1Database;
