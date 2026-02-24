import CloudflareApiClient from './Client';

/**
 * @classdesc Resource generates basic methods defined on subclasses. It is not intended to
 * be constructed directly.
 * @class
 * @private
 */
export default class Resource {
  protected apiClient: CloudflareApiClient;
  public path?: string;

  /**
   * Create the full path for a method.
   *        joined with the resource's path.
   * @returns {string} The full path for the method.
   * @param apiClient
   */
  constructor(apiClient: CloudflareApiClient) {
    this.apiClient = apiClient;
  }

  createFullPath(methodPath?: string): string | undefined {
    if (!this.path) {
      return methodPath;
    }
    return methodPath ? [this.path, methodPath].join('/') : this.path;
  }
}

