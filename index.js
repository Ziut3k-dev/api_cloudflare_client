'use strict';

const Client = require('./lib/Client');
const Zones = require('./lib/resources/Zones');
const Firewall = require('./lib/resources/Firewall');
const DNSRecords = require('./lib/resources/DNSRecords');
const AccessApplications = require('./lib/resources/AccessApplications');
const ArgoTunnels = require('./lib/resources/ArgoTunnels');

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
  }
}

module.exports = Cloudflare;
