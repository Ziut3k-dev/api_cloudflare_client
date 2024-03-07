// Import dependencies
const Resource = require('../Resource');

/**
 * Stream represents the /accout/:id/stream API endpoint.
 *
 * @class Stream
 * @extends Resource
 */
class Stream extends Resource {
  /**
   * Constructor for the Stream class.
   *
   * @constructor
   * @param {Object} apiClient - The API client instance.
   */
  constructor(apiClient) {
    super(apiClient);
    this.path = 'accounts/:accountId/stream';
    this.hasBrokenPatch = true;
    this.includeBasic = ['browse', 'read', 'edit', 'add', 'del'];
  }

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
  async listVideos(accountId) {
    const params = {accountId};
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: this.path,
        params: params,
      },
      this
    );
  }

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
  async videoDetails(accountId, id) {
    const params = {accountId, id};
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: `${this.path}/:id`,
        params: params,
      },
      this
    );
  }

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
  async uploadVideoFromUrl(accountId, video) {
    const params = {accountId};
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: `${this.path}/copy`,
        data: video,
        params: params,
      },
      this
    );
  }

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
  async deleteVideo(accountId, id) {
    const params = {accountId, id};
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: `${this.path}/:id`,
        params: params,
      },
      this
    );
  }
}

// Export the Stream class
module.exports = Stream;
