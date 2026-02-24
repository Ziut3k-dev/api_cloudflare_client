import CloudflareApiClient from '../Client';
import Resource from '../Resource';
/**
 * UserTokens represents the /user/tokens API endpoint.
 *
 * @class UserTokens
 * @extends Resource
 */
declare class UserTokens extends Resource {
    includeBasic: any;
    path: string;
    /**
     * Constructor for the UserTokens class.
     *
     * @constructor
     * @param {Object} apiClient - The API client instance.
     */
    constructor(apiClient: CloudflareApiClient);
    /**
     * roll rotates the token secret.
     *
     * @function roll
     * @memberof UserTokens
     * @instance UserTokens
     * @async
     * @param {string} id - The User Token ID.
     * @returns {Promise<Object>} The User Token response object.
     */
    roll(id: string): Promise<any>;
    /**
     * verify the token secret.
     *
     * @function verify
     * @memberof UserTokens
     * @instance UserTokens
     * @async
     * @returns {Promise<Object>} The User Token response object.
     */
    verify(): Promise<any>;
    /**
     * browsePermissionGroups browse all available permission groups.
     *
     * @function browsePermissionGroups
     * @memberof UserTokens
     * @instance UserTokens
     * @async
     * @returns {Promise<Object>} The response object.
     */
    browsePermissionGroups(): Promise<any>;
    /**
     * browse allows for listing user tokens.
     *
     * @function browse
     * @memberof UserTokens
     * @instance UserTokens
     * @async
     * @returns {Promise<Object>} The User Token response object.
     */
    browse(): Promise<any>;
    /**
     * read allows for retrieving a user token's details.
     *
     * @function read
     * @memberof UserTokens
     * @instance UserTokens
     * @async
     * @param {string} id - The User Token ID.
     * @returns {Promise<Object>} The User Token object.
     */
    read(id: string): Promise<any>;
    /**
     * add allows for creating a user token.
     *
     * @function add
     * @memberof UserTokens
     * @instance UserTokens
     * @async
     * @param {Object} token - The new user token object.
     * @returns {Promise<Object>} The created user token object.
     */
    add(token: any): Promise<any>;
    /**
     * del allows for deleting a user token.
     *
     * @function del
     * @memberof UserTokens
     * @instance UserTokens
     * @async
     * @param {string} id - The user token ID to delete.
     * @returns {Promise<Object>} The deleted user token object.
     */
    del(id: string): Promise<any>;
}
export default UserTokens;
//# sourceMappingURL=UserTokens.d.ts.map