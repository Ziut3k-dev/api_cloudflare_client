import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class Queues extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Returns the queues owned by an account.
     *
     * @param {string} accountId
     * @returns {Promise<Object>}
     */
    browse(accountId: string): Promise<any>;
    /**
     * Get information about a specific queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @returns {Promise<Object>}
     */
    read(accountId: string, queueId: string): Promise<any>;
    /**
     * Creates a new queue.
     *
     * @param {string} accountId
     * @param {Object} data - { queue_name }
     * @returns {Promise<Object>}
     */
    add(accountId: string, data: any): Promise<any>;
    /**
     * Updates a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    edit(accountId: string, queueId: string, data: any): Promise<any>;
    /**
     * Deletes a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @returns {Promise<Object>}
     */
    del(accountId: string, queueId: string): Promise<any>;
    /**
     * Returns the consumers for a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @returns {Promise<Object>}
     */
    browseConsumers(accountId: string, queueId: string): Promise<any>;
    /**
     * Creates a new consumer for a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @param {Object} data - { script_name, settings: { batch_size?, max_retries?, max_wait_time_ms? } }
     * @returns {Promise<Object>}
     */
    addConsumer(accountId: string, queueId: string, data: any): Promise<any>;
    /**
     * Updates a consumer for a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @param {string} consumerId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    editConsumer(accountId: string, queueId: string, consumerId: string, data: any): Promise<any>;
    /**
     * Deletes a consumer from a queue.
     *
     * @param {string} accountId
     * @param {string} queueId
     * @param {string} consumerId
     * @returns {Promise<Object>}
     */
    delConsumer(accountId: string, queueId: string, consumerId: string): Promise<any>;
}
export default Queues;
//# sourceMappingURL=Queues.d.ts.map