import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * PageRules represents the /zones/:zoneID/pagerules API endpoint.
 *
 * @class PageRules
 * @extends Resource
 */
declare class PageRules extends Resource {
    includeBasic: any;
    path: string;
    /**
     * Constructor for the PageRules class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * browse allows for listing all the page rules.
     *
     * @function browse
     * @memberof PageRules
     * @instance PageRules
     * @async
     * @param {string} zoneId
     * @returns {Promise<Object>} The page rules browse response object.
     */
    browse(zoneId: string): Promise<any>;
    /**
     * read allows for retrieving a specific page rule.
     *
     * @function read
     * @memberof PageRules
     * @instance PageRules
     * @async
     * @param {string} zoneId
     * @param {string} id - The page rule ID.
     * @returns {Promise<Object>} The page rule response object.
     */
    read(zoneId: string, id: string): Promise<any>;
    /**
     * edit allows for modifying a specific page rule.
     *
     * @function edit
     * @memberof PageRules
     * @instance PageRules
     * @async
     * @param {string} zoneId
     * @param {string} id - The page rule ID.
     * @param {Object} page_rule - The modified page rule object.
     * @returns {Promise<Object>} The page rule response object.
     */
    edit(zoneId: string, id: string, page_rule: any): Promise<any>;
    /**
     * add allows for creating a new page rule.
     *
     * @function add
     * @memberof PageRules
     * @instance PageRules
     * @async
     * @param {string} zoneId
     * @param {Object} page_rule - The new page rule object.
     * @returns {Promise<Object>} The page rule response object.
     */
    add(zoneId: string, page_rule: any): Promise<any>;
    /**
     * del allows for removing a page rule.
     *
     * @function del
     * @memberof PageRules
     * @instance PageRules
     * @async
     * @param {string} zoneId
     * @param {string} id - The page rule ID to delete.
     * @returns {Promise<Object>} The page rule response object.
     */
    del(zoneId: string, id: string): Promise<any>;
}
export default PageRules;
//# sourceMappingURL=PageRules.d.ts.map