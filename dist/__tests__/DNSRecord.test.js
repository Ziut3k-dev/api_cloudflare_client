"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
require("dotenv/config");
// Importy dla funkcji testowych Jest
const globals_1 = require("@jest/globals");
// Funkcja pomocnicza do oczekiwania na asynchroniczne zdarzenie
const waitFor = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
(0, globals_1.describe)('Cloudflare API Tests - DNS Records', () => {
    let cloudflareInstance;
    let zoneId;
    (0, globals_1.beforeAll)(async () => {
        cloudflareInstance = new index_1.default({
            email: process.env.CLOUDFLARE_EMAIL,
            key: process.env.CLOUDFLARE_API_KEY,
        });
        const zones = await cloudflareInstance.zones.browse();
        (0, globals_1.expect)(zones.result).toBeDefined(); // Dodane sprawdzenie
        (0, globals_1.expect)(zones.result.length).toBeGreaterThan(0);
        zoneId = zones.result[0].id;
    });
    (0, globals_1.test)('Should successfully retrieve DNS records information', async () => {
        const dnsRecords = await cloudflareInstance.dnsRecords.browse(zoneId);
        (0, globals_1.expect)(dnsRecords.result).toBeDefined(); // Dodane sprawdzenie
        (0, globals_1.expect)(dnsRecords.result.length).toBeGreaterThan(0);
        const dnsRecord = await cloudflareInstance.dnsRecords.read(zoneId, dnsRecords.result[0].id);
        (0, globals_1.expect)(dnsRecord.result.id).toEqual(dnsRecords.result[0].id);
    });
    (0, globals_1.afterAll)(async () => {
        await waitFor(1000);
    });
});
