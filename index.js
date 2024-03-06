'use strict';

const Client = require('./lib/Client');
const Zones = require('./lib/resources/Zones');

class Cloudflare {
  constructor(auth) {
    const opts = {
      email: auth && auth.email,
      key: auth && auth.key,
      token: auth && auth.token,
    };
    this.client = new Client(opts);
    this.zones = new Zones(this.client);
  }
}

module.exports = Cloudflare;
