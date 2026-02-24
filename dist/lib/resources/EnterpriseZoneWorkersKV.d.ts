import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class EnterpriseZoneWorkersKV extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * add allows for creating a key-value pair in a namespace
     *
     * @function add
     * @memberof EnterpriseZoneWorkersKV
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} namespaceId - The namespace ID
     * @param {string} id - The key to store into
     * @param {string} value - The value to store
     * @returns {Promise<Object>} The KV response object
     */
    add(accountId: string, namespaceId: any, id: string, value: any): Promise<any>;
    /**
     * read allows for reading the contents of key in a namespace
     *
     * @function read
     * @memberof EnterpriseZoneWorkersKV
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} namespaceId - The namespace ID
     * @param {string} id - The key to read from
     * @returns {Promise<Object>} The KV response object
     */
    read(accountId: string, namespaceId: any, id: string): Promise<any>;
    /**
     * del allows for deleting a key and its contents in a namespace
     *
     * @function del
     * @memberof EnterpriseZoneWorkersKV
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} namespaceId - The namespace ID
     * @param {string} id - The key to delete
     * @returns {Promise<Object>} The KV response object
     */
    del(accountId: string, namespaceId: any, id: string): Promise<any>;
    /**
     * addMulti allows for creating multiple key-value pairs in a namespace
     *
     * @function addMulti
     * @memberof EnterpriseZoneWorkersKV
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} namespaceId - The namespace ID
     * @param {Array<Object>} data - An array containing key-value pair Objects to add
     * @returns {Promise<Object>} The KV response object
     */
    addMulti(accountId: string, namespaceId: any, data: any): Promise<any>;
    /**
     * delMulti allows for deleting multiple key-value pairs in a namespace
     *
     * @function delMulti
     * @memberof EnterpriseZoneWorkersKV
     * @instance
     * @async
     * @param {string} accountId - The account ID
     * @param {string} namespaceId - The namespace ID
     * @param {Array<String>} data - The array with keys to delete
     * @returns {Promise<Object>} The KV response object
     */
    delMulti(accountId: string, namespaceId: any, data: any): Promise<any>;
}
export default EnterpriseZoneWorkersKV;
//# sourceMappingURL=EnterpriseZoneWorkersKV.d.ts.map