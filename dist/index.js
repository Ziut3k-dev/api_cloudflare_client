"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Client_1 = __importDefault(require("./lib/Client"));
const Zones_1 = __importDefault(require("./lib/resources/Zones"));
const Firewall_1 = __importDefault(require("./lib/resources/Firewall"));
const DNSRecords_1 = __importDefault(require("./lib/resources/DNSRecords"));
const AccessApplications_1 = __importDefault(require("./lib/resources/AccessApplications"));
const ArgoTunnels_1 = __importDefault(require("./lib/resources/ArgoTunnels"));
const CFIPs_1 = __importDefault(require("./lib/resources/CFIPs"));
const PageRules_1 = __importDefault(require("./lib/resources/PageRules"));
const ZoneSettings_1 = __importDefault(require("./lib/resources/ZoneSettings"));
const User_1 = __importDefault(require("./lib/resources/User"));
const UserTokens_1 = __importDefault(require("./lib/resources/UserTokens"));
const ZoneCustomHostNames_1 = __importDefault(require("./lib/resources/ZoneCustomHostNames"));
const ZoneWorkers_1 = __importDefault(require("./lib/resources/ZoneWorkers"));
const ZoneWorkersRoutes_1 = __importDefault(require("./lib/resources/ZoneWorkersRoutes"));
const ZoneWorkersScript_1 = __importDefault(require("./lib/resources/ZoneWorkersScript"));
const EnterpriseZoneWorkersScripts_1 = __importDefault(require("./lib/resources/EnterpriseZoneWorkersScripts"));
const EnterpriseZoneWorkersRoutes_1 = __importDefault(require("./lib/resources/EnterpriseZoneWorkersRoutes"));
const EnterpriseZoneWorkersKVNamespaces_1 = __importDefault(require("./lib/resources/EnterpriseZoneWorkersKVNamespaces"));
const EnterpriseZoneWorkersKV_1 = __importDefault(require("./lib/resources/EnterpriseZoneWorkersKV"));
const Rulesets_1 = __importDefault(require("./lib/resources/Rulesets"));
const Filters_1 = __importDefault(require("./lib/resources/Filters"));
class Cloudflare {
    constructor(auth) {
        const opts = {
            email: auth && auth.email,
            key: auth && auth.key,
            token: auth && auth.token,
        };
        this.client = new Client_1.default(opts);
        this.zones = new Zones_1.default(this.client);
        this.dnsRecords = new DNSRecords_1.default(this.client);
        this.firewall = new Firewall_1.default(this.client);
        this.accessApplications = new AccessApplications_1.default(this.client);
        this.argoTunnels = new ArgoTunnels_1.default(this.client);
        this.ips = new CFIPs_1.default(this.client);
        this.pageRules = new PageRules_1.default(this.client);
        this.zoneSettings = new ZoneSettings_1.default(this.client);
        this.zoneWorkers = new ZoneWorkers_1.default(this.client);
        this.zoneWorkersRoutes = new ZoneWorkersRoutes_1.default(this.client);
        this.zoneWorkersScript = new ZoneWorkersScript_1.default(this.client);
        this.enterpriseZoneWorkersScripts = new EnterpriseZoneWorkersScripts_1.default(this.client);
        this.enterpriseZoneWorkersRoutes = new EnterpriseZoneWorkersRoutes_1.default(this.client);
        this.enterpriseZoneWorkersKVNamespaces =
            new EnterpriseZoneWorkersKVNamespaces_1.default(this.client);
        this.enterpriseZoneWorkersKV = new EnterpriseZoneWorkersKV_1.default(this.client);
        this.user = new User_1.default(this.client);
        this.userTokens = new UserTokens_1.default(this.client);
        this.zoneCustomHostNames = new ZoneCustomHostNames_1.default(this.client);
        this.rulesets = new Rulesets_1.default(this.client);
        this.filters = new Filters_1.default(this.client);
    }
}
// @ts-ignore
Cloudflare.Cloudflare = Cloudflare;
// @ts-ignore
Cloudflare.default = Cloudflare;
module.exports = Cloudflare;
