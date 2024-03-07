'use strict';

/**
 * @classdesc Resource generates basic methods defined on subclasses. It is not intended to
 * be constructed directly.
 * @class
 * @private
 */
class Resource {
  /**
   * Create the full path for a method.
   *        joined with the resource's path.
   * @returns {string} The full path for the method.
   * @param apiClient
   */
  constructor(apiClient) {
    this.apiClient = apiClient;
    return this;
  }
  createFullPath(methodPath) {
    return methodPath ? [this.path, methodPath].join('/') : this.path;
  }
}

module.exports = Resource;
