import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class Turnstile extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Lists all Turnstile widgets for an account.
     *
     * @param {string} accountId
     * @param {number} [page=1]
     * @param {number} [per_page=25]
     * @returns {Promise<Object>}
     */
    browse(accountId: string, page?: number, per_page?: number): Promise<any>;
    /**
     * Fetches the details of a Turnstile widget.
     *
     * @param {string} accountId
     * @param {string} sitekey
     * @returns {Promise<Object>}
     */
    read(accountId: string, sitekey: string): Promise<any>;
    /**
     * Creates a new Turnstile widget.
     *
     * @param {string} accountId
     * @param {Object} data - { name, domains[], mode, bot_fight_mode?, clearance_level?, offlabel? }
     * @returns {Promise<Object>}
     */
    add(accountId: string, data: any): Promise<any>;
    /**
     * Updates the configuration of a widget.
     *
     * @param {string} accountId
     * @param {string} sitekey
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    edit(accountId: string, sitekey: string, data: any): Promise<any>;
    /**
     * Deletes a Turnstile widget.
     *
     * @param {string} accountId
     * @param {string} sitekey
     * @returns {Promise<Object>}
     */
    del(accountId: string, sitekey: string): Promise<any>;
    /**
     * Generate a new secret key for a given widget.
     *
     * @param {string} accountId
     * @param {string} sitekey
     * @param {Object} [data] - { invalidate_immediately? }
     * @returns {Promise<Object>}
     */
    rotateSecret(accountId: string, sitekey: string, data?: any): Promise<any>;
}
export default Turnstile;
//# sourceMappingURL=Turnstile.d.ts.map