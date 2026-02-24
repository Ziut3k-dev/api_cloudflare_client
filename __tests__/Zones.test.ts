import Cloudflare from '../index';
import 'dotenv/config';

// Importy dla funkcji testowych Jest
import {describe, test, beforeAll, afterAll, expect} from '@jest/globals';

// Funkcja pomocnicza do oczekiwania na asynchroniczne zdarzenie
const waitFor = (milliseconds: number) =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

describe('Cloudflare API Tests - Zones', () => {
  let cloudflareInstance: Cloudflare;

  beforeAll(() => {
    cloudflareInstance = new Cloudflare({
      email: process.env.CLOUDFLARE_EMAIL,
      key: process.env.CLOUDFLARE_API_KEY,
    });
  });

  test('Should successfully retrieve zone information', async () => {
    const zones = await cloudflareInstance.zones.browse();
    expect(zones.result.length).toBeGreaterThan(0);

    const zone = await cloudflareInstance.zones.read(zones.result[0].id);
    expect(zone.result.id).toEqual(zones.result[0].id);
  });

  afterAll(async () => {
    await waitFor(3000);
  });
});
