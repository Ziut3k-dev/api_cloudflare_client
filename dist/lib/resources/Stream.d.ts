import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * Stream represents the /accout/:id/stream API endpoint.
 *
 * @class Stream
 * @extends Resource
 */
declare class Stream extends Resource {
    includeBasic: any;
    path: string;
    protected hasBrokenPatch: boolean;
    /**
     * Constructor for the Stream class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * ListVideos retrieves all of an account's videos.
     *
     * @function listVideos
     * @memberof Stream
     * @instance Stream
     * @async
     * @param {string} accountId - The account ID
     * @returns {Promise<Object>} The response object
     */
    listVideos(accountId: string): Promise<any>;
    /**
     * VideoDetails retrieves details of an account's single video.
     *
     * @function videoDetails
     * @memberof Stream
     * @instance Stream
     * @async
     * @param {string} accountId - The account ID
     * @param {string} id - The video ID
     * @returns {Promise<Object>} The response object
     */
    videoDetails(accountId: string, id: string): Promise<any>;
    /**
     * UploadVideoFromUrl uploads a video from a specific URL.
     *
     * @function uploadVideoFromUrl
     * @memberof Stream
     * @instance Stream
     * @async
     * @param {string} accountId - The account ID
     * @param {Object} video - The upload video info
     * @returns {Promise<Object>} The response object
     */
    uploadVideoFromUrl(accountId: string, video: any): Promise<any>;
    /**
     * DeleteVideo deletes an account's single video.
     *
     * @function deleteVideo
     * @memberof Stream
     * @instance Stream
     * @async
     * @param {string} accountId - The account ID
     * @param {string} id - The video ID
     * @returns {Promise<Object>} The response object
     */
    deleteVideo(accountId: string, id: string): Promise<any>;
}
export default Stream;
//# sourceMappingURL=Stream.d.ts.map