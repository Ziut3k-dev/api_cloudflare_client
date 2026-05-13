import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class WaitingRooms extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Lists waiting rooms.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    browse(zoneId: string): Promise<any>;
    /**
     * Fetches a waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @returns {Promise<Object>}
     */
    read(zoneId: string, waitingRoomId: string): Promise<any>;
    /**
     * Creates a new waiting room.
     *
     * @param {string} zoneId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    add(zoneId: string, data: any): Promise<any>;
    /**
     * Updates a configured waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    edit(zoneId: string, waitingRoomId: string, data: any): Promise<any>;
    /**
     * Deletes a waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @returns {Promise<Object>}
     */
    del(zoneId: string, waitingRoomId: string): Promise<any>;
    /**
     * Lists events for a waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @returns {Promise<Object>}
     */
    getEvents(zoneId: string, waitingRoomId: string): Promise<any>;
    /**
     * Fetches the status of a waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @returns {Promise<Object>}
     */
    getStatus(zoneId: string, waitingRoomId: string): Promise<any>;
}
export default WaitingRooms;
//# sourceMappingURL=WaitingRooms.d.ts.map