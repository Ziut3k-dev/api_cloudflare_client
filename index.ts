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

class Cloudflare {
  public client: Client;
  public zones: Zones;
  public dnsRecords: DNSRecords;
  public firewall: Firewall;
  public accessApplications: AccessApplications;
  public argoTunnels: ArgoTunnels;
  public ips: CFIPs;
  public pageRules: PageRules;
  public zoneSettings: ZoneSettings;
  public zoneWorkers: ZoneWorkers;
  public zoneWorkersRoutes: ZoneWorkersRoutes;
  public zoneWorkersScript: ZoneWorkersScript;
  public enterpriseZoneWorkersScripts: EnterpriseZoneWorkersScripts;
  public enterpriseZoneWorkersRoutes: EnterpriseZoneWorkersRoutes;
  public enterpriseZoneWorkersKVNamespaces: EnterpriseZoneWorkersKVNamespaces;
  public enterpriseZoneWorkersKV: EnterpriseZoneWorkersKV;
  public user: User;
  public userTokens: UserTokens;
  public zoneCustomHostNames: ZoneCustomHostNames;
  public rulesets: Rulesets;
  public filters: Filters;

  constructor(auth: CloudflareAuthOptions) {
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
    this.enterpriseZoneWorkersKVNamespaces =
      new EnterpriseZoneWorkersKVNamespaces(this.client);
    this.enterpriseZoneWorkersKV = new EnterpriseZoneWorkersKV(this.client);
    this.user = new User(this.client);
    this.userTokens = new UserTokens(this.client);
    this.zoneCustomHostNames = new ZoneCustomHostNames(this.client);
    this.rulesets = new Rulesets(this.client);
    this.filters = new Filters(this.client);
  }
}

export default Cloudflare;
export { Cloudflare };
