/*
 * Copyright (C) 2014-present Cloudflare, Inc.

 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

'use strict';

const prototypal = require('es-class');
const auto = require('autocreate');

const Resource = require('../Resource');

/**
 * Zones represents the /zones API endpoint.
 *
 * @class Zones
 * @hideconstructor
 * @extends Resource
 */
module.exports = auto(
  prototypal({
    extends: Resource,
    path: 'zone/:id/firewall/rules/:ruleId',
    hasBrokenPatch: true,

    includeBasic: ['browse', 'read', 'edit', 'add', 'del'],

    /**
     * browse allows for listing all the zones
     *
     * @function browse
     * @memberof FirewallRule
     * @instance
     * @async
     * @param {string} id - The zone ID
     * @returns {Promise<Object>} The zone browse response object.
     */
    /**
     * read allows for retrieving a specific zone
     *
     * @function read
     * @memberof FirewallRule
     * @instance
     * @async
     * @param {string} id - The zone ID
     * @param {string} ruleId - The modified zone object

     * @returns {Promise<Object>} The zone response object.
     */
    /**
     * edit allows for modifying a specific zone
     *
     * @function edit
     * @memberof FirewallRule
     * @instance
     * @async
     * @param {string} id - The zone ID
     * @param {string} ruleId - The rule ID
     * @param {Object} rule - The modified rule object
     * @returns {Promise<Object>} The zone response object.
     */
    /**
     * add allows for creating a new zone
     *
     * @function add
     * @memberof FirewallRule
     * @instance
     * @async
     * @param {Object} zone - The new zone object
     * @returns {Promise<Object>} The zone response object.
     */
    /**
     * del allows for removing a new zone
     *
     * @function del
     * @memberof FirewallRule
     * @instance
     * @async
     * @param {string} id - The zone ID to delete
     * @returns {Promise<Object>} The zone response object.
     */
  })
);
