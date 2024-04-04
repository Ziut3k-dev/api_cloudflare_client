'use strict';

const Client = require('./lib/Client');
const Zones = require('./lib/resources/Zones');
const Firewall = require('./lib/resources/Firewall');
const DNSRecords = require('./lib/resources/DNSRecords');
const AccessApplications = require('./lib/resources/AccessApplications');
const ArgoTunnels = require('./lib/resources/ArgoTunnels');
const CFIPs = require('./lib/resources/CFIPs');
const PageRules = require('./lib/resources/PageRules');
const ZoneSettings = require('./lib/resources/ZoneSettings');
const User = require('./lib/resources/User');
const UserTokens = require('./lib/resources/UserTokens');
const ZoneCustomHostNames = require('./lib/resources/ZoneCustomHostNames');
const ZoneWorkers = require('./lib/resources/ZoneWorkers');
const ZoneWorkersRoutes = require('./lib/resources/ZoneWorkersRoutes');
const ZoneWorkersScript = require('./lib/resources/ZoneWorkersScript');
const EnterpriseZoneWorkersScripts = require('./lib/resources/EnterpriseZoneWorkersScripts');
const EnterpriseZoneWorkersRoutes = require('./lib/resources/EnterpriseZoneWorkersRoutes');
const EnterpriseZoneWorkersKVNamespaces = require('./lib/resources/EnterpriseZoneWorkersKVNamespaces');
const EnterpriseZoneWorkersKV = require('./lib/resources/EnterpriseZoneWorkersKV');
const Rulesets = require('./lib/resources/Rulesets');
class Cloudflare {
  constructor(auth) {
    const opts = {
      email: auth && auth.email,
      key: auth && auth.key,
      token: auth && auth.token,
    };
    this.client = new Client(opts);
    this.zones = new Zones(this.client);
    this.dnsRecords = new DNSRecords(this.client);
    this.firewall = new Firewall(this.client);
    this.accessApplications = new AccessApplications(this.client);
    this.argoTunnels = new ArgoTunnels(this.client);
    this.ips = new CFIPs(this.client);
    this.pageRules = new PageRules(this.client);
    this.zoneSettings = new ZoneSettings(this.client);
    this.zoneWorkers = new ZoneWorkers(this.client);
    this.zoneWorkersRoutes = new ZoneWorkersRoutes(this.client);
    this.zoneWorkersScript = new ZoneWorkersScript(this.client);
    this.enterpriseZoneWorkersScripts = new EnterpriseZoneWorkersScripts(
      this.client
    );
    this.enterpriseZoneWorkersRoutes = new EnterpriseZoneWorkersRoutes(
      this.client
    );
    this.enterpriseZoneWorkersKVNamespaces = new EnterpriseZoneWorkersKVNamespaces(
      this.client
    );
    this.enterpriseZoneWorkersKV = new EnterpriseZoneWorkersKV(this.client);
    this.user = new User(this.client);
    this.userTokens = new UserTokens(this.client);
    this.zoneCustomHostNames = new ZoneCustomHostNames(this.client);
    this.rulesets = new Rulesets(this.client);
  }
}

module.exports = Cloudflare;
