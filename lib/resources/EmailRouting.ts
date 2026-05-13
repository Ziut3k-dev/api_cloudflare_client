import CloudflareApiClient from '../Client';
import Resource from '../Resource';

class EmailRouting extends Resource {
  public path: string;

  constructor(apiClient: CloudflareApiClient) {
    super(apiClient);
    this.path = 'zones/:zoneId/email/routing';
  }

  /**
   * Get Email Routing settings for a zone.
   *
   * @param {string} zoneId
   * @returns {Promise<Object>}
   */
  async get(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/email/routing',
        data: {},
        params: { zoneId },
      },
      this
    );
  }

  /**
   * Enable Email Routing for a zone.
   *
   * @param {string} zoneId
   * @returns {Promise<Object>}
   */
  async enable(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/email/routing/enable',
        data: {},
        params: { zoneId },
      },
      this
    );
  }

  /**
   * Disable Email Routing for a zone.
   *
   * @param {string} zoneId
   * @returns {Promise<Object>}
   */
  async disable(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/email/routing/disable',
        data: {},
        params: { zoneId },
      },
      this
    );
  }

  /**
   * Lists existing routing rules.
   *
   * @param {string} zoneId
   * @returns {Promise<Object>}
   */
  async browseRules(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/email/routing/rules',
        data: {},
        params: { zoneId },
      },
      this
    );
  }

  /**
   * Gets an existing email routing rule.
   *
   * @param {string} zoneId
   * @param {string} ruleId
   * @returns {Promise<Object>}
   */
  async readRule(zoneId: string, ruleId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/email/routing/rules/:ruleId',
        data: {},
        params: { zoneId, ruleId },
      },
      this
    );
  }

  /**
   * Creates a new email routing rule.
   *
   * @param {string} zoneId
   * @param {Object} data - { matchers[], actions[], name?, enabled?, priority? }
   * @returns {Promise<Object>}
   */
  async addRule(zoneId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'POST',
        uriPath: 'zones/:zoneId/email/routing/rules',
        data,
        params: { zoneId },
      },
      this
    );
  }

  /**
   * Updates an email routing rule.
   *
   * @param {string} zoneId
   * @param {string} ruleId
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async editRule(zoneId: string, ruleId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: 'zones/:zoneId/email/routing/rules/:ruleId',
        data,
        params: { zoneId, ruleId },
      },
      this
    );
  }

  /**
   * Deletes an existing routing rule.
   *
   * @param {string} zoneId
   * @param {string} ruleId
   * @returns {Promise<Object>}
   */
  async delRule(zoneId: string, ruleId: string) {
    return this.apiClient.request(
      {
        method: 'DELETE',
        uriPath: 'zones/:zoneId/email/routing/rules/:ruleId',
        data: {},
        params: { zoneId, ruleId },
      },
      this
    );
  }

  /**
   * Lists existing catch-all routing rule or sets a routing rule for all
   * inbound emails that do not match any specific routing rules.
   *
   * @param {string} zoneId
   * @returns {Promise<Object>}
   */
  async getCatchAll(zoneId: string) {
    return this.apiClient.request(
      {
        method: 'GET',
        uriPath: 'zones/:zoneId/email/routing/rules/catch_all',
        data: {},
        params: { zoneId },
      },
      this
    );
  }

  /**
   * Updates the catch-all routing rule.
   *
   * @param {string} zoneId
   * @param {Object} data - { matchers[], actions[], name?, enabled? }
   * @returns {Promise<Object>}
   */
  async editCatchAll(zoneId: string, data: any) {
    return this.apiClient.request(
      {
        method: 'PUT',
        uriPath: 'zones/:zoneId/email/routing/rules/catch_all',
        data,
        params: { zoneId },
      },
      this
    );
  }
}

export default EmailRouting;
