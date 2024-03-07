const Cloudflare = require('../index');
require('dotenv').config({path: './.env'});

// Importy dla funkcji testowych Jest
const {describe, test, beforeAll, afterAll, expect} = require('@jest/globals');

// Funkcja pomocnicza do oczekiwania na asynchroniczne zdarzenie
const waitFor = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

describe('Cloudflare API Tests - DNS Records', () => {
  let cloudflareInstance;
  let zoneId;

  beforeAll(async () => {
    cloudflareInstance = new Cloudflare({
      email: process.env.CLOUDFLARE_EMAIL,
      key: process.env.CLOUDFLARE_API_KEY,
    });
    const zones = await cloudflareInstance.zones.browse();
    expect(zones.result).toBeDefined(); // Dodane sprawdzenie
    expect(zones.result.length).toBeGreaterThan(0);

    zoneId = zones.result[0].id;
  });

  test('Should successfully retrieve DNS records information', async () => {
    const dnsRecords = await cloudflareInstance.dnsRecords.browse(zoneId);
    expect(dnsRecords.result).toBeDefined(); // Dodane sprawdzenie
    expect(dnsRecords.result.length).toBeGreaterThan(0);

    const dnsRecord = await cloudflareInstance.dnsRecords.read(
      zoneId,
      dnsRecords.result[0].id
    );
    expect(dnsRecord.result.id).toEqual(dnsRecords.result[0].id);
  });

  afterAll(async () => {
    await waitFor(1000);
  });
});
