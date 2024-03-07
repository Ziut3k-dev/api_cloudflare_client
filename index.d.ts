declare namespace Cloudflare {
  interface Zones {
    activationCheck(id: string): ResponseObjectPromise;

    del(id: string): ResponseObjectPromise;

    add(data: {
      name: string;
      account: {id: string};
      type?: 'full' | 'partial' | undefined;
    }): ResponseObjectPromise;

    edit(
      zoneId: string,
      zone: {
        name: string;
        action: {id: string};
        jump_start?: boolean | undefined;
        type?: 'full' | 'partial' | undefined;
      },
    ): ResponseObjectPromise;

    read(zoneId: string): ZoneResponseObject;

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

    browse(): ZonesResponseObject;

    browse(zoneId: string): ZoneResponseObject;
  }

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

  interface AuthObject {
    email?: string | undefined;
    key?: string | undefined;
    token?: string | undefined;
  }

  interface DnsRecordWithoutPriority {
    type: Exclude<RecordTypes, 'MX' | 'SRV' | 'URI'>;
    name: string;
    content: string;
    ttl: number;
    proxied?: boolean | undefined;
  }

  interface DnsRecordWithPriority {
    type: Extract<RecordTypes, 'MX' | 'URI'>;
    name: string;
    content: string;
    ttl: number;
    proxied?: boolean | undefined;
    priority: number;
  }

  interface SrvDnsRecord {
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

  interface DNSRecords {
    edit(zone_id: string, id: string, record: DnsRecord): ResponseObjectPromise;

    browse<RecordType extends RecordTypes = any>(
      zone_id: string,
      options?: {name: string; type: string; content: string},
    ): Promise<Cloudflare.DnsRecordsBrowseResponse<RecordType>>;

    export(zone_id: string): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;

    add(zone_id: string, record: DnsRecord): ResponseObjectPromise;
  }

  interface DnsRecordsBrowseOptions<RecordType extends RecordTypes> {
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
  }

  interface DnsRecordsBrowseResponse<RecordType extends RecordTypes> {
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

  interface ResponseMessageObject {
    code: number;
    message: string;
  }

  interface EnterpriseZoneWorkerScripts {
    read(account_id: string, name: string): ResponseObjectPromise;

    browse(account_id: string, name: string): ResponseObjectPromise;

    edit(account_id: string, name: string, script: string): ResponseObjectPromise;

    del(account_id: string, name: string): ResponseObjectPromise;
  }

  interface EnterpriseZoneWorkersRoutes {
    browse(zone_id: string): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseObjectPromise;

    add(zone_id: string, config: {pattern: string; script: string}): ResponseObjectPromise;

    edit(zone_id: string, id: string, config: {pattern: string; script: string}): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;
  }

  interface EnterpriseZoneWorkersKVNamespaces {
    edit(account_id: string, id: string, config: {title: string}): ResponseObjectPromise;

    browse(account_id: string): ResponseObjectPromise;

    add(account_id: string, config: {title: string}): ResponseObjectPromise;

    del(account_id: string, id: string): ResponseObjectPromise;
  }

  interface EnterpriseZoneWorkersKV {
    browse(account_id: string, namespace_id: string): ResponseObjectPromise;

    add(account_id: string, namespace_id: string, key_name: string): Cloudflare.ResponseObjectPromise;

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

  interface CFIPs {
    browse(): ResponseObjectPromise;
  }

  interface PageRules {
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


  interface ZoneSettings {
    read(id: string, setting: string): ResponseObjectPromise;

    edit(id: string, setting: string, value: string | Record<string, unknown>): ResponseObjectPromise;

    editAll(id: string, settings: any): ResponseObjectPromise;

    browse(id: string): ResponseObjectPromise;
  }

  interface ZoneCustomHostNames {
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

  interface ZoneWorkers {
    validate(zone_id: string, script: string): ResponseObjectPromise;
  }

  interface ZoneWorkersScript {
    read(zone_id: string, script?: string): ResponseObjectPromise;

    del(): ResponseObjectPromise;
  }

  interface ZoneWorkersRoutes {
    browse(zone_id: string): ResponseObjectPromise;

    edit(zone_id: string, id: string, config: {pattern: string; script: string}): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;

    add(zone_id: string, config: {pattern: string; script: string}): ResponseObjectPromise;

    del(zone_id: string, id: string): ResponseObjectPromise;
  }

  interface User {
    read(): ResponseObjectPromise;

    edit(user: string): Cloudflare.ResponseObjectPromise;
  }

  interface Stream {
    listVideos(accountId: string): ResponseObjectPromise;

    videoDetails(accountId: string, id: string): ResponseObjectPromise;

    deleteVideo(accountId: string, id: string): ResponseObjectPromise;
  }

  interface Firewall {
    browse(zone_id: string): ResponseObjectPromise;

    // add(zone_id: string, config: { mode: string; configuration: object }): ResponseObjectPromise;
    // edit(zone_id: string, id: string, config: { mode: string; configuration: object }): ResponseObjectPromise;
    del(zone_id: string, id: string): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;
  }

  interface AccessApplications {
    browse(): ResponseObjectPromise;

    // add(config: { name: string; domain: string; type: string }): ResponseObjectPromise;
    // edit(id: string, config: { name: string; domain: string; type: string }): ResponseObjectPromise;
    del(id: string): ResponseObjectPromise;

    read(id: string): ResponseObjectPromise;
  }

  interface ZonesResponseObject {
    result: Array<Zone> | null;
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

  interface ZoneResponseObject {
    result: Zone;
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

  interface Zone {
    id: string;
    name: string;
    development_mode: number;
    original_name_servers: string[];
    original_registrar: string;
    original_dnshost: string;
    created_on: string;
    modified_on: string;
    activated_on: string;
    meta: {
      step: number;
      wildcard_proxiable: boolean;
      custom_certificate_quota: number;
      page_rule_quota: number;
      zone_type: string;
      hosted_cnames: number;
      hosted_mx: number;
      hosted_txt: number;
      owner: {
        id: string;
        email: string;
        type: string;
      };
      permissions: string[];
      plan: {
        id: string;
        name: string;
        price: number;
        currency: string;
        frequency: string;
        legacy_id: string;
        is_subscribed: boolean;
        can_subscribe: boolean;
      };
    };
    name_servers: string[];
    owner: {
      id: string;
      email: string;
      type: string;
    };
    account: {
      id: string;
      name: string;
    };
    permissions: string[];
    plan: {
      id: string;
      name: string;
      price: number;
      currency: string;
      frequency: string;
      legacy_id: string;
      is_subscribed: boolean;
      can_subscribe: boolean;
    };
    status: string;
    paused: boolean;
    type: string;
    host: {
      name: string;
      original_name: string;
      original_ip: string;
    };
    cloudflare_nameservers: string[];

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
  accessApplications: Cloudflare.AccessApplications;

  constructor(auth: Cloudflare.AuthObject);
}

export default Cloudflare;
