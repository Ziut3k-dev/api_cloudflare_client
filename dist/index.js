"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloudflare = void 0;
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
const Stream_1 = __importDefault(require("./lib/resources/Stream"));
const Accounts_1 = __importDefault(require("./lib/resources/Accounts"));
const AccountMembers_1 = __importDefault(require("./lib/resources/AccountMembers"));
const AccountRoles_1 = __importDefault(require("./lib/resources/AccountRoles"));
const ZoneSSL_1 = __importDefault(require("./lib/resources/ZoneSSL"));
const RateLimits_1 = __importDefault(require("./lib/resources/RateLimits"));
const WaitingRooms_1 = __importDefault(require("./lib/resources/WaitingRooms"));
const LoadBalancers_1 = __importDefault(require("./lib/resources/LoadBalancers"));
const LoadBalancerPools_1 = __importDefault(require("./lib/resources/LoadBalancerPools"));
const LoadBalancerMonitors_1 = __importDefault(require("./lib/resources/LoadBalancerMonitors"));
const EmailRouting_1 = __importDefault(require("./lib/resources/EmailRouting"));
const R2Buckets_1 = __importDefault(require("./lib/resources/R2Buckets"));
const D1Database_1 = __importDefault(require("./lib/resources/D1Database"));
const Queues_1 = __importDefault(require("./lib/resources/Queues"));
const Turnstile_1 = __importDefault(require("./lib/resources/Turnstile"));
const Logpush_1 = __importDefault(require("./lib/resources/Logpush"));
const AuditLogs_1 = __importDefault(require("./lib/resources/AuditLogs"));
const Tunnels_1 = __importDefault(require("./lib/resources/Tunnels"));
class Cloudflare {
    constructor(auth) {
        const opts = {
            email: auth && auth.email,
            key: auth && auth.key,
            token: auth && auth.token,
        };
        this.client = new Client_1.default(opts);
        // Zone management
        this.zones = new Zones_1.default(this.client);
        this.dnsRecords = new DNSRecords_1.default(this.client);
        this.zoneSettings = new ZoneSettings_1.default(this.client);
        this.zoneCustomHostNames = new ZoneCustomHostNames_1.default(this.client);
        this.zoneSSL = new ZoneSSL_1.default(this.client);
        // Security & firewall
        this.firewall = new Firewall_1.default(this.client);
        this.filters = new Filters_1.default(this.client);
        this.rulesets = new Rulesets_1.default(this.client);
        this.pageRules = new PageRules_1.default(this.client);
        this.rateLimits = new RateLimits_1.default(this.client);
        this.waitingRooms = new WaitingRooms_1.default(this.client);
        // Workers
        this.zoneWorkers = new ZoneWorkers_1.default(this.client);
        this.zoneWorkersRoutes = new ZoneWorkersRoutes_1.default(this.client);
        this.zoneWorkersScript = new ZoneWorkersScript_1.default(this.client);
        this.enterpriseZoneWorkersScripts = new EnterpriseZoneWorkersScripts_1.default(this.client);
        this.enterpriseZoneWorkersRoutes = new EnterpriseZoneWorkersRoutes_1.default(this.client);
        this.enterpriseZoneWorkersKVNamespaces = new EnterpriseZoneWorkersKVNamespaces_1.default(this.client);
        this.enterpriseZoneWorkersKV = new EnterpriseZoneWorkersKV_1.default(this.client);
        // Traffic & load balancing
        this.loadBalancers = new LoadBalancers_1.default(this.client);
        this.loadBalancerPools = new LoadBalancerPools_1.default(this.client);
        this.loadBalancerMonitors = new LoadBalancerMonitors_1.default(this.client);
        // Access & tunnels
        this.accessApplications = new AccessApplications_1.default(this.client);
        this.argoTunnels = new ArgoTunnels_1.default(this.client);
        this.tunnels = new Tunnels_1.default(this.client);
        // Accounts
        this.accounts = new Accounts_1.default(this.client);
        this.accountMembers = new AccountMembers_1.default(this.client);
        this.accountRoles = new AccountRoles_1.default(this.client);
        // Media & storage
        this.stream = new Stream_1.default(this.client);
        this.r2Buckets = new R2Buckets_1.default(this.client);
        this.d1Database = new D1Database_1.default(this.client);
        // Compute
        this.queues = new Queues_1.default(this.client);
        this.turnstile = new Turnstile_1.default(this.client);
        // Email
        this.emailRouting = new EmailRouting_1.default(this.client);
        // Observability
        this.logpush = new Logpush_1.default(this.client);
        this.auditLogs = new AuditLogs_1.default(this.client);
        // User & infrastructure
        this.user = new User_1.default(this.client);
        this.userTokens = new UserTokens_1.default(this.client);
        this.ips = new CFIPs_1.default(this.client);
    }
}
exports.Cloudflare = Cloudflare;
exports.default = Cloudflare;
