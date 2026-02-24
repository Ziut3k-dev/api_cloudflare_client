import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class AccessApplications extends Resource {
    includeBasic: any;
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * browse allows for listing all Access Applications for an account
     *
     * @function browse
     * @memberof AccessApplications
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @returns {Promise<Object>} The Access Applications response object.
     */
    browse(accountId: string): Promise<any>;
    /**
     * read allows for retrieving the specified Access Applications
     *
     * @function read
     * @memberof AccessApplications
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} id - The Access Applications ID
     * @returns {Promise<Object>} The Access Applications object.
     */
    read(accountId: string, id: string): Promise<any>;
    /**
     * edit allows for modifying a specific Access Applications
     *
     * @function edit
     * @memberof AccessApplications
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} id
     * @param {Object} application - The modified Access Applications object
     * @returns {Promise<Object>} The Access Applications response object.
     */
    edit(accountId: string, id: string, application: any): Promise<any>;
    /**
     * add allows for creating a new Access Applications for an account.
     *
     * @function add
     * @memberof AccessApplications
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {Object} application - The new Access Applications object
     * @returns {Promise<Object>} The created Access Applications object.
     */
    add(accountId: string, application: any): Promise<any>;
    /**
     * del allows for deleting the specified Application
     *
     * @function del
     * @memberof AccessApplications
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} id - The Access Applications ID
     * @returns {Promise<Object>} The deleted Access Applications object.
     */
    del(accountId: string, id: string): Promise<any>;
}
export default AccessApplications;
//# sourceMappingURL=AccessApplications.d.ts.map