import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * User represents the /user API endpoint.
 *
 * @class User
 * @extends Resource
 */
declare class User extends Resource {
    path: string;
    /**
     * Constructor for the User class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * read returns the current user object.
     *
     * @function read
     * @memberof User
     * @instance User
     * @async
     * @returns {Promise<Object>} The user object.
     */
    read(): Promise<any>;
    /**
     * edit allows for modification of the current user.
     *
     * @function edit
     * @memberof User
     * @instance User
     * @async
     * @param {Object} user - The modified user object.
     * @returns {Promise<Object>} The user object.
     */
    edit(user: any): Promise<any>;
}
export default User;
//# sourceMappingURL=User.d.ts.map