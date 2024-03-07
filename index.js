'use strict';

const Client = require('./lib/Client');
const Zones = require('./lib/resources/Zones');
const Firewall = require('./lib/resources/Firewall');
const DNSRecords = require('./lib/resources/DNSRecords');
const AccessApplications = require('./lib/resources/AccessApplications');
const ArgoTunnels = require('./lib/resources/ArgoTunnels');
const CFIPs = require('./lib/resources/CFIPs');
const PageRules = require('./lib/resources/PageRules');

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
  }
}

module.exports = Cloudflare;
