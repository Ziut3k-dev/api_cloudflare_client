declare namespace Cloudflare {
  type RecordTypes =
    | 'A'
    | 'AAAA'
    | 'CNAME'
    | 'HTTPS'
    | 'TXT'
    | 'SRV'
    | 'LOC'
    | 'MX'
    | 'NS'
    | 'SPF'
    | 'CERT'
    | 'DNSKEY'
    | 'DS'
    | 'NAPTR'
    | 'SMIMEA'
    | 'SSHFP'
    | 'SVCB'
    | 'TLSA'
    | 'URI';

  type ResponseObjectPromise = Promise<object>;
  type ResponseCloudflareObject<T> = Promise<{
    result: T[] | null;
    result_info: {
      page: number;
      per_page: number;
      count: number;
      total_count: number;
      total_pages: number;
    };
    success: boolean;
    errors: ResponseMessageObject[];
    messages: ResponseMessageObject[];
  }>;

  export interface AuthObject {
    email?: string | undefined;
    key?: string | undefined;
    token?: string | undefined;
  }

  export interface DnsRecordWithoutPriority {
    type: Exclude<RecordTypes, 'MX' | 'SRV' | 'URI'>;
    name: string;
    content: string;
    ttl: number;
    proxied?: boolean | undefined;
  }

  export interface DnsRecordWithPriority {
    type: Extract<RecordTypes, 'MX' | 'URI'>;
    name: string;
    content: string;
    ttl: number;
    proxied?: boolean | undefined;
    priority: number;
  }

  export interface SrvDnsRecord {
    type: 'SRV';
    data: {
      name: string;
      service: string;
      proto: string;
      ttl: number;
      proxied?: boolean | undefined;
      priority: number;
      weight: number;
      port: number;
      target: string;
    };
  }

  type DnsRecord = DnsRecordWithPriority | DnsRecordWithoutPriority | SrvDnsRecord;
  type ExistingDnsRecordByType<RecordType extends RecordTypes> =
    & (RecordType extends 'MX' | 'URI' ? DnsRecordWithPriority
      : RecordType extends 'SRV' ? SrvDnsRecord
        : RecordType extends Exclude<RecordTypes, 'MX' | 'SRV' | 'URI'> ? DnsRecordWithoutPriority
          : DnsRecord)
    & {id: string};

  export interface DNSRecords {
    edit(zone_id: string, id: string, record: DnsRecord): ResponseObjectPromise;

    browse<RecordType extends RecordTypes = any>(
      zone_id: string,
      options?: DnsRecordsBrowseOptions<RecordType>,
    ): Promise<DnsRecordsBrowseResponse<RecordType>>;

    export(zone_id: string): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;

    add(zone_id: string, record: DnsRecord): ResponseObjectPromise;
  }

  export interface DnsRecordsBrowseOptions<RecordType extends RecordTypes> {
    page?: number;
    per_page?: number;
    name?: string;
    content?: string;
    type?: RecordType;
    order?: 'type' | 'name' | 'content' | 'ttl' | 'proxied';
    direction?: 'asc' | 'desc';
    match?: 'any' | 'all';
    tag?: string;
    tag_match?: 'any' | 'all';
    search?: string;
    comment?: string;
    // TODO: support nested filters (for example tag.absent)
  }

  export interface DnsRecordsBrowseResponse<RecordType extends RecordTypes> {
    result: Array<ExistingDnsRecordByType<RecordType>> | null;
    result_info: {
      page: number;
      per_page: number;
      count: number;
      total_count: number;
    };
    success: boolean;
    errors: ResponseMessageObject[];
    messages: ResponseMessageObject[];
  }

  export interface ResponseMessageObject {
    code: number;
    message: string;
  }

  export interface EnterpriseZoneWorkerScripts {
    read(account_id: string, name: string): ResponseObjectPromise;

    browse(account_id: string, name: string): ResponseObjectPromise;

    edit(account_id: string, name: string, script: string): ResponseObjectPromise;

    del(account_id: string, name: string): ResponseObjectPromise;
  }

  export interface EnterpriseZoneWorkersRoutes {
    browse(zone_id: string): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseObjectPromise;

    add(zone_id: string, config: {pattern: string; script: string}): ResponseObjectPromise;

    edit(zone_id: string, id: string, config: {pattern: string; script: string}): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;
  }

  export interface EnterpriseZoneWorkersKVNamespaces {
    edit(account_id: string, id: string, config: {title: string}): ResponseObjectPromise;

    browse(account_id: string): ResponseObjectPromise;

    add(account_id: string, config: {title: string}): ResponseObjectPromise;

    del(account_id: string, id: string): ResponseObjectPromise;
  }

  export interface EnterpriseZoneWorkersKV {
    browse(account_id: string, namespace_id: string): ResponseObjectPromise;

    add(account_id: string, namespace_id: string, key_name: string, value: string): ResponseObjectPromise;

    read(account_id: string, namespace_id: string, key_name: string): ResponseObjectPromise;

    del(account_id: string, namespace_id: string, key_name: string): ResponseObjectPromise;

    addMulti(
      account_id: string,
      namespace_id: string,
      data: Array<{
        key: string;
        value: string;
        expiration?: number;
        expiration_ttl?: number;
        metadata?: object;
        base64?: boolean;
      }>,
    ): ResponseObjectPromise;

    delMulti(account_id: string, namespace_id: string, data: string[]): ResponseObjectPromise;
  }

  export interface CFIPs {
    browse(): ResponseObjectPromise;
  }

  export interface PageRules {
    edit(
      id: string,
      page_rule: {
        targets: [
          {
            target: string;
            constraint: {
              operator: string;
              value: string;
            };
          },
        ];
        actions: [
          {
            id: string;
            value: string;
          },
        ];
        priority?: number | undefined;
        status?: string | undefined;
      },
    ): ResponseObjectPromise;

    add(zone: {
      targets: [
        {
          target: string;
          constraint: {
            operator: string;
            value: string;
          };
        },
      ];
      actions: [
        {
          id: string;
          value: string;
        },
      ];
      priority?: number | undefined;
      status?: string | undefined;
    }): ResponseObjectPromise;

    del(id: string): ResponseObjectPromise;

    browse(): ResponseObjectPromise;

    read(id: string): ResponseObjectPromise;
  }

  type Zone = {
    id: string;
    name: string;
    status: string;
    paused: boolean;
    type: string;
    development_mode: number;
    name_servers: string[];
    original_name_servers: string[];
    original_registrar: string | null;
    original_dnshost: string | null;
    modified_on: string;
    created_on: string;
    activated_on: string;
    host: {
      name: string;
      website: string;
    };
    meta: {
      step: number;
      custom_certificate_quota: number;
      page_rule_quota: number;
      phishing_detected: boolean;
    };
    owner: {
      id: string | null;
      type: string;
      email: string | null;
    };
    account: {
      id: string;
      name: string;
    };
    tenant: {
      id: string | null;
      name: string | null;
    };
    tenant_unit: {
      id: string | null;
    };
    permissions: string[];
    plan: {
      id: string;
      name: string;
      price: number;
      currency: string;
      frequency: string;
      is_subscribed: boolean;
      can_subscribe: boolean;
      legacy_id: string;
      legacy_discount: boolean;
      externally_managed: boolean;
    };
  }

  export interface Zones {
    activationCheck(id: string): ResponseObjectPromise;

    del(id: string): ResponseObjectPromise;

    add(zone: {
      name: string;
      action: {id: string};
      jump_start?: boolean | undefined;
      type?: 'full' | 'partial' | undefined;
    }): ResponseObjectPromise;

    edit(
      id: string,
      zone: {
        name: string;
        action: {id: string};
        jump_start?: boolean | undefined;
        type?: 'full' | 'partial' | undefined;
      },
    ): ResponseObjectPromise;

    read(id: string): ResponseObjectPromise;

    purgeCache(
      id: string,
      params: {
        files?:
          | string[]
          | {url: string; headers: {Origin: string; 'CF-IPCountry': string; 'CF-Device-Type': string}}
          | undefined;
        tags?: string[] | undefined;
        hosts?: string[] | undefined;
        prefixes?: string[] | undefined;
      },
    ): ResponseObjectPromise;

    browse(
      zoneId?: string | null,
      per_page?: number,
      page?: number,
    ): ResponseCloudflareObject<Zone>;
  }

  export interface ZoneSettings {
    read(id: string, setting: string): ResponseObjectPromise;

    edit(id: string, setting: string, value: string | Record<string, unknown>): ResponseObjectPromise;

    editAll(id: string, settings: any): ResponseObjectPromise;

    browse(id: string): ResponseObjectPromise;
  }

  export interface ZoneCustomHostNames {
    browse(zone_id: string): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;

    edit(
      zone_id: string,
      id: string,
      config: {
        hostname: string;
        ssl: {
          method: string;
          type: string;
          settings: {
            http2: string;
            http3: string;
            min_tls_version: string;
            tls_1_3: string;
            ciphers: string[];
          };
          bundle_method: string;
          wildcard: boolean;
          custom_certificate: string;
          custom_key: string;
        };
      },
    ): ResponseObjectPromise;

    add(
      zone_id: string,
      config: {
        hostname: string;
        ssl: {
          method: string;
          type: string;
          settings: {
            http2: string;
            http3: string;
            min_tls_version: string;
            tls_1_3: string;
            ciphers: string[];
          };
          bundle_method: string;
          wildcard: boolean;
          custom_certificate: string;
          custom_key: string;
        };
      },
    ): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseObjectPromise;
  }

  export interface ZoneWorkers {
    validate(zone_id: string, script: string): ResponseObjectPromise;
  }

  export interface ZoneWorkersScript {
    read(zone_id: string, script?: string): ResponseObjectPromise;

    del(): ResponseObjectPromise;
  }

  export interface ZoneWorkersRoutes {
    browse(zone_id: string): ResponseObjectPromise;

    edit(zone_id: string, id: string, config: {pattern: string; script: string}): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;

    add(zone_id: string, config: {pattern: string; script: string}): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseObjectPromise;
  }

  export interface User {
    read(): ResponseObjectPromise;

    edit(user: {
      first_name: string;
      last_name: string;
      telephone: string;
      country: string;
      zipcode: string;
    }): ResponseObjectPromise;
  }

  export interface Stream {
    listVideos(accountId: string): ResponseObjectPromise;

    videoDetails(accountId: string, id: string): ResponseObjectPromise;

    deleteVideo(accountId: string, id: string): ResponseObjectPromise;
  }

  type FirewallFilter =
    {
      id?: string;
      expression?: string;
      paused?: boolean;
      description?: string;
      ref?: string;
    };

  type FirewallRule = {
    id: string;
    pasuse: boolean;
    description?: string;
    action: FirewallRuleAction;
    ref: string;
    priority: number;
    created_on: string;
    modified_on: string;
    filter: FirewallFilter;
  };
  type FirewallRuleAction = 'block' | 'challenge' | 'js_challenge' | 'allow';
  type FirewallBody = {
    priority?: number;
    filter?: FirewallFilter;
    action: FirewallRuleAction;
    description: string;
    paused?: boolean;
  };

  export interface Firewall {
    browse(zone_id: string): ResponseCloudflareObject<FirewallRule>;

    read(zone_id: string, id: string): ResponseObjectPromise;

    edit(zone_id: string, id: string, config: {value: string}): ResponseObjectPromise;

    add(zone_id: string, rules: FirewallBody[]): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseCloudflareObject<FirewallRule>;
  }

  type Ruleset = {
    description: string;
    id: string;
    kind: RulesetKind;
    last_updated: string;
    name: string;
    phase: RulesetPhase;
    version: string;
  };
  type RulesetKind = 'managed' | 'user' | 'zone' | 'custom';
  type RulesetPhase = 'ddos_l4' |
    'ddos_l7' |
    'http_config_settings' |
    'http_custom_errors' |
    'http_log_custom_fields' |
    'http_ratelimit' |
    'http_request_cache_settings' |
    'http_request_dynamic_redirect' |
    'http_request_firewall_custom' |
    'http_request_firewall_managed' |
    'http_request_late_transform' |
    'http_request_origin' |
    'http_request_redirect' |
    'http_request_sanitize' |
    'http_request_sbfm' |
    'http_request_select_configuration' |
    'http_request_transform' |
    'http_response_compression' |
    'http_response_firewall_managed' |
    'http_response_headers_transform' |
    'magic_transit' |
    'magic_transit_ids_managed' |
    'magic_transit_managed';
  type RulesetBody = {
    action: 'allow' | 'block' | 'log' | 'skip';
    action_parameters?: {
      response?: {
        status_code?: number;
        content_type?: string;
        body?: string;
      }
    };
    description?: string;
    enabled?: boolean;
    expression: string;
    logging?: {
      enabled: boolean;
    };
    ref?: string;
  }

  export interface Rulesets {
    browse(zone_id: string): ResponseCloudflareObject<Ruleset>;

    read(zone_id: string, ruleId: string): ResponseCloudflareObject<Ruleset>;

    edit(zone_id: string, ruleId: string, rules: RulesetBody): ResponseObjectPromise;

    add(zone_id: string, ruleId: string, rules: RulesetBody): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseObjectPromise;
  }

  export interface Filters {
    browse(zone_id: string): ResponseObjectPromise;

    read(zone_id: string, ruleId: string): ResponseObjectPromise;

    edit(zone_id: string, ruleId: string, rules: RulesetBody): ResponseObjectPromise;

    add(zone_id: string, ruleId: string, rules: RulesetBody): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseObjectPromise;
  }
}

declare class Cloudflare {
  dnsRecords: Cloudflare.DNSRecords;
  enterpriseZoneWorkersScripts: Cloudflare.EnterpriseZoneWorkerScripts;
  enterpriseZoneWorkersRoutes: Cloudflare.EnterpriseZoneWorkersRoutes;
  enterpriseZoneWorkersKVNamespaces: Cloudflare.EnterpriseZoneWorkersKVNamespaces;
  enterpriseZoneWorkersKV: Cloudflare.EnterpriseZoneWorkersKV;
  ips: Cloudflare.CFIPs;
  zones: Cloudflare.Zones;
  zoneSettings: Cloudflare.ZoneSettings;
  zoneCustomHostNames: Cloudflare.ZoneCustomHostNames;
  zoneWorkers: Cloudflare.ZoneWorkers;
  zoneWorkersScript: Cloudflare.ZoneWorkersScript;
  zoneWorkersRoutes: Cloudflare.ZoneWorkersRoutes;
  user: Cloudflare.User;
  stream: Cloudflare.Stream;
  pageRules: Cloudflare.PageRules;
  firewall: Cloudflare.Firewall;
  rulesets: Cloudflare.Rulesets;
  filters: Cloudflare.Filters;

  constructor(auth: Cloudflare.AuthObject);

}

export = Cloudflare;