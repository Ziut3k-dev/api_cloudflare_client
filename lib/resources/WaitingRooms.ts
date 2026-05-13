import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class WaitingRooms extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/waiting_rooms/:waitingRoomId';
  }

  /**
   * Lists waiting rooms.
   *
   * @param {string} zoneId
   * @returns {Promise<Object>}
   */
  async browse(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/waiting_rooms',
        data: {},
        params: { zoneId, waitingRoomId: null },
      },
      this
    );
  }

  /**
   * Fetches a waiting room.
   *
   * @param {string} zoneId
   * @param {string} waitingRoomId
   * @returns {Promise<Object>}
   */
  async read(zoneId: string, waitingRoomId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: undefined,
        data: {},
        params: { zoneId, waitingRoomId },
      },
      this
    );
  }

  /**
   * Creates a new waiting room.
   *
   * @param {string} zoneId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async add(zoneId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/waiting_rooms',
        data,
        params: { zoneId, waitingRoomId: null },
      },
      this
    );
  }

  /**
   * Updates a configured waiting room.
   *
   * @param {string} zoneId
   * @param {string} waitingRoomId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async edit(zoneId: string, waitingRoomId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: undefined,
        data,
        params: { zoneId, waitingRoomId },
      },
      this
    );
  }

  /**
   * Deletes a waiting room.
   *
   * @param {string} zoneId
   * @param {string} waitingRoomId
   * @returns {Promise<Object>}
   */
  async del(zoneId: string, waitingRoomId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: undefined,
        data: {},
        params: { zoneId, waitingRoomId },
      },
      this
    );
  }

  /**
   * Lists events for a waiting room.
   *
   * @param {string} zoneId
   * @param {string} waitingRoomId
   * @returns {Promise<Object>}
   */
  async getEvents(zoneId: string, waitingRoomId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/waiting_rooms/:waitingRoomId/events',
        data: {},
        params: { zoneId, waitingRoomId },
      },
      this
    );
  }

  /**
   * Fetches the status of a waiting room.
   *
   * @param {string} zoneId
   * @param {string} waitingRoomId
   * @returns {Promise<Object>}
   */
  async getStatus(zoneId: string, waitingRoomId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/waiting_rooms/:waitingRoomId/status',
        data: {},
        params: { zoneId, waitingRoomId },
      },
      this
    );
  }
}

export default WaitingRooms;
