import Client, { CloudflareAuthOptions } from './lib/Client';
import Zones from './lib/resources/Zones';
import Firewall from './lib/resources/Firewall';
import DNSRecords from './lib/resources/DNSRecords';
import AccessApplications from './lib/resources/AccessApplications';
import ArgoTunnels from './lib/resources/ArgoTunnels';
import CFIPs from './lib/resources/CFIPs';
import PageRules from './lib/resources/PageRules';
import ZoneSettings from './lib/resources/ZoneSettings';
import User from './lib/resources/User';
import UserTokens from './lib/resources/UserTokens';
import ZoneCustomHostNames from './lib/resources/ZoneCustomHostNames';
import ZoneWorkers from './lib/resources/ZoneWorkers';
import ZoneWorkersRoutes from './lib/resources/ZoneWorkersRoutes';
import ZoneWorkersScript from './lib/resources/ZoneWorkersScript';
import EnterpriseZoneWorkersScripts from './lib/resources/EnterpriseZoneWorkersScripts';
import EnterpriseZoneWorkersRoutes from './lib/resources/EnterpriseZoneWorkersRoutes';
import EnterpriseZoneWorkersKVNamespaces from './lib/resources/EnterpriseZoneWorkersKVNamespaces';
import EnterpriseZoneWorkersKV from './lib/resources/EnterpriseZoneWorkersKV';
import Rulesets from './lib/resources/Rulesets';
import Filters from './lib/resources/Filters';
import Stream from './lib/resources/Stream';
import Accounts from './lib/resources/Accounts';
import AccountMembers from './lib/resources/AccountMembers';
import AccountRoles from './lib/resources/AccountRoles';
import ZoneSSL from './lib/resources/ZoneSSL';
import RateLimits from './lib/resources/RateLimits';
import WaitingRooms from './lib/resources/WaitingRooms';
import LoadBalancers from './lib/resources/LoadBalancers';
import LoadBalancerPools from './lib/resources/LoadBalancerPools';
import LoadBalancerMonitors from './lib/resources/LoadBalancerMonitors';
import EmailRouting from './lib/resources/EmailRouting';
import R2Buckets from './lib/resources/R2Buckets';
import D1Database from './lib/resources/D1Database';
import Queues from './lib/resources/Queues';
import Turnstile from './lib/resources/Turnstile';
import Logpush from './lib/resources/Logpush';
import AuditLogs from './lib/resources/AuditLogs';
import Tunnels from './lib/resources/Tunnels';

class Cloudflare {
  public client: Client;

  // Zone management
  public zones: Zones;
  public dnsRecords: DNSRecords;
  public zoneSettings: ZoneSettings;
  public zoneCustomHostNames: ZoneCustomHostNames;
  public zoneSSL: ZoneSSL;

  // Security & firewall
  public firewall: Firewall;
  public filters: Filters;
  public rulesets: Rulesets;
  public pageRules: PageRules;
  public rateLimits: RateLimits;
  public waitingRooms: WaitingRooms;

  // Workers
  public zoneWorkers: ZoneWorkers;
  public zoneWorkersRoutes: ZoneWorkersRoutes;
  public zoneWorkersScript: ZoneWorkersScript;
  public enterpriseZoneWorkersScripts: EnterpriseZoneWorkersScripts;
  public enterpriseZoneWorkersRoutes: EnterpriseZoneWorkersRoutes;
  public enterpriseZoneWorkersKVNamespaces: EnterpriseZoneWorkersKVNamespaces;
  public enterpriseZoneWorkersKV: EnterpriseZoneWorkersKV;

  // Traffic & load balancing
  public loadBalancers: LoadBalancers;
  public loadBalancerPools: LoadBalancerPools;
  public loadBalancerMonitors: LoadBalancerMonitors;

  // Access & tunnels
  public accessApplications: AccessApplications;
  public argoTunnels: ArgoTunnels;
  public tunnels: Tunnels;

  // Accounts
  public accounts: Accounts;
  public accountMembers: AccountMembers;
  public accountRoles: AccountRoles;

  // Media & storage
  public stream: Stream;
  public r2Buckets: R2Buckets;
  public d1Database: D1Database;

  // Compute
  public queues: Queues;
  public turnstile: Turnstile;

  // Email
  public emailRouting: EmailRouting;

  // Observability
  public logpush: Logpush;
  public auditLogs: AuditLogs;

  // User & infrastructure
  public user: User;
  public userTokens: UserTokens;
  public ips: CFIPs;

  constructor(auth: CloudflareAuthOptions) {
    const opts = {
      email: auth && auth.email,
      key: auth && auth.key,
      token: auth && auth.token,
    };
    this.client = new Client(opts);

    // Zone management
    this.zones = new Zones(this.client);
    this.dnsRecords = new DNSRecords(this.client);
    this.zoneSettings = new ZoneSettings(this.client);
    this.zoneCustomHostNames = new ZoneCustomHostNames(this.client);
    this.zoneSSL = new ZoneSSL(this.client);

    // Security & firewall
    this.firewall = new Firewall(this.client);
    this.filters = new Filters(this.client);
    this.rulesets = new Rulesets(this.client);
    this.pageRules = new PageRules(this.client);
    this.rateLimits = new RateLimits(this.client);
    this.waitingRooms = new WaitingRooms(this.client);

    // Workers
    this.zoneWorkers = new ZoneWorkers(this.client);
    this.zoneWorkersRoutes = new ZoneWorkersRoutes(this.client);
    this.zoneWorkersScript = new ZoneWorkersScript(this.client);
    this.enterpriseZoneWorkersScripts = new EnterpriseZoneWorkersScripts(this.client);
    this.enterpriseZoneWorkersRoutes = new EnterpriseZoneWorkersRoutes(this.client);
    this.enterpriseZoneWorkersKVNamespaces = new EnterpriseZoneWorkersKVNamespaces(this.client);
    this.enterpriseZoneWorkersKV = new EnterpriseZoneWorkersKV(this.client);

    // Traffic & load balancing
    this.loadBalancers = new LoadBalancers(this.client);
    this.loadBalancerPools = new LoadBalancerPools(this.client);
    this.loadBalancerMonitors = new LoadBalancerMonitors(this.client);

    // Access & tunnels
    this.accessApplications = new AccessApplications(this.client);
    this.argoTunnels = new ArgoTunnels(this.client);
    this.tunnels = new Tunnels(this.client);

    // Accounts
    this.accounts = new Accounts(this.client);
    this.accountMembers = new AccountMembers(this.client);
    this.accountRoles = new AccountRoles(this.client);

    // Media & storage
    this.stream = new Stream(this.client);
    this.r2Buckets = new R2Buckets(this.client);
    this.d1Database = new D1Database(this.client);

    // Compute
    this.queues = new Queues(this.client);
    this.turnstile = new Turnstile(this.client);

    // Email
    this.emailRouting = new EmailRouting(this.client);

    // Observability
    this.logpush = new Logpush(this.client);
    this.auditLogs = new AuditLogs(this.client);

    // User & infrastructure
    this.user = new User(this.client);
    this.userTokens = new UserTokens(this.client);
    this.ips = new CFIPs(this.client);
  }
}

// @ts-ignore
Cloudflare.Cloudflare = Cloudflare;
// @ts-ignore
Cloudflare.default = Cloudflare;

export = Cloudflare;

