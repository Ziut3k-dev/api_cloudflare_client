import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class DNSRecords extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * browse allows for listing all DNS Records for a zone
     *
     * @function browse
     * @memberof DNSRecords
     * @instance
     * @async
     * @param {string} zoneId - The zone ID
     * @returns {Promise<Object>} The DNS browser response object.
     */
    browse(zoneId: string): Promise<any>;
    /**
     * read allows for retrieving the specified DNS Record
     * @function read
     * @memberof DNSRecords
     * @instance
     * @async
     * @param {string} zoneId - The zone ID
     * @param {string} id - The DNS record ID to retrieve
     * @returns {Promise<Object>} The DNS record object.
     */
    read(zoneId: string, id: string): Promise<any>;
    /**
     * edit allows for modification of the specified DNS Record
     *
     * @function edit
     * @memberof DNSRecords
     * @instance
     * @async
     * @param {string} zoneId - The zone ID
     * @param {string} id - The DNS record ID being modified
     * @param {Object} record - The modified DNS record object
     * @returns {Promise<Object>} The DNS record object.
     */
    edit(zoneId: string, id: string, record: any): Promise<any>;
    /**
     * export retrieves all of a zone's DNS Records in BIND configuration format.
     *
     * @function export
     * @memberof DNSRecords
     * @instance
     * @async
     * @param {string} zoneId - The zone ID
     * @returns {Promise<Object>} The DNS browser response object.
     */
    export(zoneId: string): Promise<any>;
    /**
     * add allows for creating a new DNS record for a zone.
     *
     * @function add
     * @memberof DNSRecords
     * @instance
     * @async
     * @param {string} zoneId - The zone ID
     * @param {Object} record - The new DNS record object
     * @returns {Promise<Object>} The created DNS record object.
     */
    add(zoneId: string, record: any): Promise<any>;
    /**
     * del allows for deleting the specified DNS Record
     *
     * @function del
     * @memberof DNSRecords
     * @instance
     * @async
     * @param {string} zoneId - The zone ID
     * @param {string} id - The DNS record ID to delete
     * @returns {Promise<Object>} The deleted DNS record object.
     */
    del(zoneId: string, id: string): Promise<any>;
}
export default DNSRecords;
//# sourceMappingURL=DNSRecords.d.ts.map