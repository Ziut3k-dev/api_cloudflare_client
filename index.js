'use strict';

const Client = require('./lib/Client');
const proxy = require('./lib/proxy');

const resources = {
  firewallRule: require('./lib/resources/Firewall'),
  accessApplications: require('./lib/resources/AccessApplications'),
  argoTunnels: require('./lib/resources/ArgoTunnels'),
  dnsRecords: require('./lib/resources/DNSRecords'),
  enterpriseZoneWorkersScripts: require('./lib/resources/EnterpriseZoneWorkersScripts'),
  enterpriseZoneWorkersRoutes: require('./lib/resources/EnterpriseZoneWorkersRoutes'),
  enterpriseZoneWorkersKVNamespaces: require('./lib/resources/EnterpriseZoneWorkersKVNamespaces'),
  enterpriseZoneWorkersKV: require('./lib/resources/EnterpriseZoneWorkersKV'),
  ips: require('./lib/resources/IPs'),
  pageRules: require('./lib/resources/PageRules'),
  zones: require('./lib/resources/Zones'),
  zoneSettings: require('./lib/resources/ZoneSettings'),
  zoneCustomHostNames: require('./lib/resources/ZoneCustomHostNames'),
  zoneWorkers: require('./lib/resources/ZoneWorkers'),
  zoneWorkersScript: require('./lib/resources/ZoneWorkersScript'),
  zoneWorkersRoutes: require('./lib/resources/ZoneWorkersRoutes'),
  user: require('./lib/resources/User'),
  userTokens: require('./lib/resources/UserTokens'),
  stream: require('./lib/resources/Stream'),
};

const withEnvProxy = function withEnvProxy(opts) {
  const httpsProxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  const noProxy = process.env.NO_PROXY || process.env.no_proxy;

  if (httpsProxy) {
    const agent = proxy.proxyAgent(
      httpsProxy,
      noProxy,
      'https://api.cloudflare.com'
    );

    if (agent) {
      opts.agent = agent;
    }
  }
};

class Cloudflare {
  constructor(auth) {
    const opts = {
      email: auth && auth.email,
      key: auth && auth.key,
      token: auth && auth.token,
    };

    withEnvProxy(opts);

    const client = new Client(opts);

    Object.defineProperty(this, '_client', {
      value: client,
      writable: false,
      enumerable: false,
      configurable: false,
    });

    Object.keys(resources).forEach(function(resource) {
      Object.defineProperty(this, resource, {
        value: resources[resource](this._client),
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }, this);
  }
}

module.exports = Cloudflare;
