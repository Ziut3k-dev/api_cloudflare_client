import CloudflareApiClient from '../Client';
import Resource from '../Resource';
declare class Logpush extends Resource {
    path: string;
    constructor(apiClient: CloudflareApiClient);
    /**
     * Lists Logpush jobs for a zone.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    browseJobs(zoneId: string): Promise<any>;
    /**
     * Gets the details of a Logpush job.
     *
     * @param {string} zoneId
     * @param {number} jobId
     * @returns {Promise<Object>}
     */
    readJob(zoneId: string, jobId: number): Promise<any>;
    /**
     * Creates a new Logpush job.
     *
     * @param {string} zoneId
     * @param {Object} data - { destination_conf, dataset, logpull_options?, ownership_challenge?, name?, enabled? }
     * @returns {Promise<Object>}
     */
    addJob(zoneId: string, data: any): Promise<any>;
    /**
     * Updates a Logpush job's settings.
     *
     * @param {string} zoneId
     * @param {number} jobId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    editJob(zoneId: string, jobId: number, data: any): Promise<any>;
    /**
     * Deletes a Logpush job.
     *
     * @param {string} zoneId
     * @param {number} jobId
     * @returns {Promise<Object>}
     */
    delJob(zoneId: string, jobId: number): Promise<any>;
    /**
     * Gets a new ownership challenge sent to your destination.
     *
     * @param {string} zoneId
     * @param {Object} data - { destination_conf }
     * @returns {Promise<Object>}
     */
    getOwnershipChallenge(zoneId: string, data: any): Promise<any>;
    /**
     * Validates ownership challenge.
     *
     * @param {string} zoneId
     * @param {Object} data - { destination_conf, ownership_challenge }
     * @returns {Promise<Object>}
     */
    validateOwnership(zoneId: string, data: any): Promise<any>;
    /**
     * Checks if there is an existing destination that matches the provided
     * destination_conf.
     *
     * @param {string} zoneId
     * @param {Object} data - { destination_conf }
     * @returns {Promise<Object>}
     */
    validateDestination(zoneId: string, data: any): Promise<any>;
}
export default Logpush;
//# sourceMappingURL=Logpush.d.ts.map