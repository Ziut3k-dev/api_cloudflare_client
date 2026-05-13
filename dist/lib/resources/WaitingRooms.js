"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = __importDefault(require("../Resource"));
class WaitingRooms extends Resource_1.default {
    constructor(apiClient) {
        super(apiClient);
        this.path = 'zones/:zoneId/waiting_rooms/:waitingRoomId';
    }
    /**
     * Lists waiting rooms.
     *
     * @param {string} zoneId
     * @returns {Promise<Object>}
     */
    async browse(zoneId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/waiting_rooms',
            data: {},
            params: { zoneId, waitingRoomId: null },
        }, this);
    }
    /**
     * Fetches a waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @returns {Promise<Object>}
     */
    async read(zoneId, waitingRoomId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: undefined,
            data: {},
            params: { zoneId, waitingRoomId },
        }, this);
    }
    /**
     * Creates a new waiting room.
     *
     * @param {string} zoneId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async add(zoneId, data) {
        return this.apiClient.request({
            method: 'POST',
            uriPath: 'zones/:zoneId/waiting_rooms',
            data,
            params: { zoneId, waitingRoomId: null },
        }, this);
    }
    /**
     * Updates a configured waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    async edit(zoneId, waitingRoomId, data) {
        return this.apiClient.request({
            method: 'PUT',
            uriPath: undefined,
            data,
            params: { zoneId, waitingRoomId },
        }, this);
    }
    /**
     * Deletes a waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @returns {Promise<Object>}
     */
    async del(zoneId, waitingRoomId) {
        return this.apiClient.request({
            method: 'DELETE',
            uriPath: undefined,
            data: {},
            params: { zoneId, waitingRoomId },
        }, this);
    }
    /**
     * Lists events for a waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @returns {Promise<Object>}
     */
    async getEvents(zoneId, waitingRoomId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/waiting_rooms/:waitingRoomId/events',
            data: {},
            params: { zoneId, waitingRoomId },
        }, this);
    }
    /**
     * Fetches the status of a waiting room.
     *
     * @param {string} zoneId
     * @param {string} waitingRoomId
     * @returns {Promise<Object>}
     */
    async getStatus(zoneId, waitingRoomId) {
        return this.apiClient.request({
            method: 'GET',
            uriPath: 'zones/:zoneId/waiting_rooms/:waitingRoomId/status',
            data: {},
            params: { zoneId, waitingRoomId },
        }, this);
    }
}
exports.default = WaitingRooms;
