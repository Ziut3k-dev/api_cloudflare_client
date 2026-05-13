import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class D1Database extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Returns a list of D1 databases.
     *
     * @param {string} accountId
     * @param {number} [page=1]
     * @param {number} [per_page=100]
     * @returns {Promise<Object>}
     */
    browse(accountId: string, page?: number, per_page?: number): Promise<any>;
    /**
     * Returns the specified D1 database.
     *
     * @param {string} accountId
     * @param {string} databaseId
     * @returns {Promise<Object>}
     */
    read(accountId: string, databaseId: string): Promise<any>;
    /**
     * Returns the created D1 database.
     *
     * @param {string} accountId
     * @param {Object} data - { name, primary_location_hint? }
     * @returns {Promise<Object>}
     */
    add(accountId: string, data: any): Promise<any>;
    /**
     * Deletes the specified D1 database.
     *
     * @param {string} accountId
     * @param {string} databaseId
     * @returns {Promise<Object>}
     */
    del(accountId: string, databaseId: string): Promise<any>;
    /**
     * Returns the query result.
     *
     * @param {string} accountId
     * @param {string} databaseId
     * @param {string} sql - SQL query
     * @param {any[]} [params] - Positional query parameters
     * @returns {Promise<Object>}
     */
    query(accountId: string, databaseId: string, sql: string, params?: any[]): Promise<any>;
    /**
     * Returns the query result as a raw response.
     *
     * @param {string} accountId
     * @param {string} databaseId
     * @param {string} sql - SQL query
     * @param {any[]} [params] - Positional query parameters
     * @returns {Promise<Object>}
     */
    raw(accountId: string, databaseId: string, sql: string, params?: any[]): Promise<any>;
}
export default D1Database;
//# sourceMappingURL=D1Database.d.ts.map