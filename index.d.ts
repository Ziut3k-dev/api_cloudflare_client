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
    & { id: string };

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

    add(zone_id: string, config: { pattern: string; script: string }): ResponseObjectPromise;

    edit(zone_id: string, id: string, config: { pattern: string; script: string }): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;
  }

  export interface EnterpriseZoneWorkersKVNamespaces {
    edit(account_id: string, id: string, config: { title: string }): ResponseObjectPromise;

    browse(account_id: string): ResponseObjectPromise;

    add(account_id: string, config: { title: string }): ResponseObjectPromise;

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
      action: { id: string };
      jump_start?: boolean | undefined;
      type?: 'full' | 'partial' | undefined;
    }): ResponseObjectPromise;

    edit(
      id: string,
      zone: {
        name: string;
        action: { id: string };
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
        | { url: string; headers: { Origin: string; 'CF-IPCountry': string; 'CF-Device-Type': string } }
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

    edit(zone_id: string, id: string, config: { pattern: string; script: string }): ResponseObjectPromise;

    read(zone_id: string, id: string): ResponseObjectPromise;

    add(zone_id: string, config: { pattern: string; script: string }): ResponseObjectPromise;

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

    uploadVideoFromUrl(accountId: string, video: { url: string; meta?: object }): ResponseObjectPromise;

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

    edit(zone_id: string, id: string, config: { value: string }): ResponseObjectPromise;

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
    rules?: RulesetRule[];
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
  type RulesetRule = {
    id?: string;
    action?: string;
    action_parameters?: any;
    categories?: string[];
    description?: string;
    enabled?: boolean;
    exposed_credential_check?: {
      password_expression: string;
      username_expression: string;
    };
    expression?: string;
    last_updated?: string;
    logging?: {
      enabled: boolean;
    };
    ratelimit?: {
      characteristics: string[];
      period: number;
      counting_expression?: string;
      mitigation_timeout?: number;
      requests_per_period?: number;
      requests_to_origin?: boolean;
      score_per_period?: number;
      score_response_header_name?: string;
    };
    ref?: string;
    version?: string;
  };

  type RulesetBody = {
    name?: string;
    description?: string;
    kind?: RulesetKind;
    phase?: RulesetPhase;
    rules: RulesetRule[];
  }

  export interface Rulesets {
    browse(zone_id: string): ResponseCloudflareObject<Ruleset>;

    read(zone_id: string, rulesetId: string): ResponseCloudflareObject<Ruleset>;

    edit(zone_id: string, rulesetId: string, ruleset: RulesetBody): ResponseObjectPromise;

    add(zone_id: string, ruleset: RulesetBody): ResponseObjectPromise;

    del(zone_id: string, rulesetId: string): ResponseObjectPromise;
  }

  export interface Filters {
    browse(zone_id: string): ResponseObjectPromise;

    read(zone_id: string, filterId: string): ResponseObjectPromise;

    edit(zone_id: string, filterId: string, filter: any): ResponseObjectPromise;

    add(zone_id: string, ruleId: string, filter: any): ResponseObjectPromise;

    del(zone_id: string, filterId: string): ResponseObjectPromise;
  }

  // ─── Access Applications ─────────────────────────────────────────────────────

  export interface AccessApplications {
    browse(accountId: string): ResponseObjectPromise;

    read(accountId: string, id: string): ResponseObjectPromise;

    add(accountId: string, application: any): ResponseObjectPromise;

    edit(accountId: string, id: string, application: any): ResponseObjectPromise;

    del(accountId: string, id: string): ResponseObjectPromise;
  }

  // ─── Argo Tunnels (legacy) ────────────────────────────────────────────────────

  export interface ArgoTunnels {
    browse(accountId: string): ResponseObjectPromise;

    read(accountId: string, id: string): ResponseObjectPromise;

    add(accountId: string, tunnel: { name: string; tunnel_secret: string }): ResponseObjectPromise;

    del(accountId: string, id: string): ResponseObjectPromise;

    clean(accountId: string, id: string): ResponseObjectPromise;
  }

  // ─── User Tokens ─────────────────────────────────────────────────────────────

  export interface UserTokens {
    browse(): ResponseObjectPromise;

    read(id: string): ResponseObjectPromise;

    add(token: any): ResponseObjectPromise;

    del(id: string): ResponseObjectPromise;

    roll(id: string): ResponseObjectPromise;

    verify(): ResponseObjectPromise;

    browsePermissionGroups(): ResponseObjectPromise;
  }

  // ─── Accounts ────────────────────────────────────────────────────────────────

  type Account = {
    id: string;
    name: string;
    settings?: {
      enforce_twofactor?: boolean;
      use_account_custom_ns_by_default?: boolean;
    };
    created_on?: string;
  };

  export interface Accounts {
    browse(page?: number, per_page?: number): ResponseCloudflareObject<Account>;

    read(accountId: string): ResponseObjectPromise;

    edit(accountId: string, data: Partial<Account>): ResponseObjectPromise;
  }

  type AccountMember = {
    id: string;
    user: {
      id: string;
      first_name: string | null;
      last_name: string | null;
      email: string;
      two_factor_authentication_enabled: boolean;
    };
    status: 'accepted' | 'pending';
    roles: AccountRole[];
  };

  export interface AccountMembers {
    browse(accountId: string): ResponseObjectPromise;

    read(accountId: string, memberId: string): ResponseObjectPromise;

    add(accountId: string, data: { email: string; roles: string[] }): ResponseObjectPromise;

    edit(accountId: string, memberId: string, data: { roles: Array<{ id: string }> }): ResponseObjectPromise;

    del(accountId: string, memberId: string): ResponseObjectPromise;
  }

  type AccountRole = {
    id: string;
    name: string;
    description: string;
    permissions: Record<string, { read: boolean; edit: boolean }>;
  };

  export interface AccountRoles {
    browse(accountId: string): ResponseObjectPromise;

    read(accountId: string, roleId: string): ResponseObjectPromise;
  }

  // ─── SSL ─────────────────────────────────────────────────────────────────────

  type CertificatePack = {
    id: string;
    type: 'advanced' | 'sni_custom' | 'legacy_custom' | 'universal';
    hosts: string[];
    certificates: Array<{
      id: string;
      hosts: string[];
      issuer: string;
      signature: string;
      status: string;
      bundle_method: string;
      zone_id: string;
      uploaded_on: string;
      modified_on: string;
      expires_on: string;
      priority: number;
    }>;
    primary_certificate: string;
    status: string;
  };

  export interface ZoneSSL {
    browse(zoneId: string): ResponseObjectPromise;

    read(zoneId: string, certPackId: string): ResponseObjectPromise;

    add(zoneId: string, data: {
      type: 'advanced';
      hosts: string[];
      validation_method?: 'txt' | 'http' | 'email';
      validity_days?: 14 | 30 | 90 | 365;
      certificate_authority?: 'digicert' | 'google' | 'lets_encrypt';
    }): ResponseObjectPromise;

    edit(zoneId: string, certPackId: string, data: { validation_method: 'txt' | 'http' | 'email' }): ResponseObjectPromise;

    del(zoneId: string, certPackId: string): ResponseObjectPromise;
  }

  // ─── Rate Limits ─────────────────────────────────────────────────────────────

  type RateLimit = {
    id: string;
    disabled?: boolean;
    description?: string;
    match: {
      request?: {
        methods?: string[];
        schemes?: string[];
        url?: string;
      };
      response?: {
        status?: number[];
        headers?: Array<{ name: string; op: 'eq' | 'ne'; value: string }>;
        origin_traffic?: boolean;
      };
    };
    period: number;
    threshold: number;
    action: {
      mode: 'simulate' | 'ban' | 'challenge' | 'js_challenge' | 'managed_challenge';
      timeout?: number;
      response?: {
        content_type: string;
        body: string;
      };
    };
    correlate?: {
      by: 'nat';
    };
    bypass?: Array<{ name: string; value: string }>;
  };

  export interface RateLimits {
    browse(zoneId: string, page?: number, per_page?: number): ResponseObjectPromise;

    read(zoneId: string, rateLimitId: string): ResponseObjectPromise;

    add(zoneId: string, data: Omit<RateLimit, 'id'>): ResponseObjectPromise;

    edit(zoneId: string, rateLimitId: string, data: Partial<RateLimit>): ResponseObjectPromise;

    del(zoneId: string, rateLimitId: string): ResponseObjectPromise;
  }

  // ─── Waiting Rooms ────────────────────────────────────────────────────────────

  type WaitingRoom = {
    id: string;
    name: string;
    description?: string;
    suspended?: boolean;
    host: string;
    path?: string;
    queue_all?: boolean;
    new_users_per_minute: number;
    total_active_users: number;
    session_duration?: number;
    disable_session_renewal?: boolean;
    json_response_enabled?: boolean;
    queueing_method?: 'fifo' | 'random' | 'passthrough' | 'reject';
    cookie_attributes?: {
      samesite?: 'Auto' | 'Lax' | 'None' | 'Strict';
      secure?: 'Auto' | 'Always' | 'Never';
    };
    additional_routes?: Array<{ host: string; path?: string }>;
    created_on?: string;
    modified_on?: string;
  };

  export interface WaitingRooms {
    browse(zoneId: string): ResponseObjectPromise;

    read(zoneId: string, waitingRoomId: string): ResponseObjectPromise;

    add(zoneId: string, data: Omit<WaitingRoom, 'id' | 'created_on' | 'modified_on'>): ResponseObjectPromise;

    edit(zoneId: string, waitingRoomId: string, data: Partial<WaitingRoom>): ResponseObjectPromise;

    del(zoneId: string, waitingRoomId: string): ResponseObjectPromise;

    getEvents(zoneId: string, waitingRoomId: string): ResponseObjectPromise;

    getStatus(zoneId: string, waitingRoomId: string): ResponseObjectPromise;
  }

  // ─── Load Balancers ───────────────────────────────────────────────────────────

  type LoadBalancer = {
    id: string;
    description?: string;
    name: string;
    enabled?: boolean;
    ttl?: number;
    fallback_pool: string;
    default_pools: string[];
    region_pools?: Record<string, string[]>;
    country_pools?: Record<string, string[]>;
    pop_pools?: Record<string, string[]>;
    proxied?: boolean;
    steering_policy?: 'off' | 'geo' | 'random' | 'dynamic_latency' | 'proximity' | 'least_outstanding_requests' | 'least_connections' | '';
    session_affinity?: 'none' | 'cookie' | 'ip_cookie' | 'header' | '';
    session_affinity_ttl?: number;
    session_affinity_attributes?: Record<string, any>;
    adaptive_routing?: { failover_across_pools: boolean };
    location_strategy?: { prefer_ecs: 'always' | 'never' | 'proximity' | 'geo'; mode: 'pop' | 'resolver_ip' };
    created_on?: string;
    modified_on?: string;
  };

  export interface LoadBalancers {
    browse(zoneId: string): ResponseObjectPromise;

    read(zoneId: string, lbId: string): ResponseObjectPromise;

    add(zoneId: string, data: Omit<LoadBalancer, 'id' | 'created_on' | 'modified_on'>): ResponseObjectPromise;

    edit(zoneId: string, lbId: string, data: Partial<LoadBalancer>): ResponseObjectPromise;

    del(zoneId: string, lbId: string): ResponseObjectPromise;
  }

  type LoadBalancerPool = {
    id: string;
    name: string;
    description?: string;
    enabled?: boolean;
    minimum_origins?: number;
    monitor?: string;
    notification_email?: string;
    notification_filter?: {
      pool?: { healthy?: boolean | null; };
      origin?: { healthy?: boolean | null; };
    };
    origins: Array<{
      name: string;
      address: string;
      enabled?: boolean;
      weight?: number;
      header?: { Host: string[] };
      virtual_network_id?: string;
    }>;
    latitude?: number;
    longitude?: number;
    load_shedding?: {
      default_percent?: number;
      default_policy?: 'random' | 'hash';
      session_percent?: number;
      session_policy?: 'hash';
    };
    created_on?: string;
    modified_on?: string;
  };

  export interface LoadBalancerPools {
    browse(accountId: string): ResponseObjectPromise;

    read(accountId: string, poolId: string): ResponseObjectPromise;

    add(accountId: string, data: Omit<LoadBalancerPool, 'id' | 'created_on' | 'modified_on'>): ResponseObjectPromise;

    edit(accountId: string, poolId: string, data: Partial<LoadBalancerPool>): ResponseObjectPromise;

    del(accountId: string, poolId: string): ResponseObjectPromise;

    health(accountId: string, poolId: string): ResponseObjectPromise;

    preview(accountId: string, poolId: string, data: any): ResponseObjectPromise;
  }

  type LoadBalancerMonitor = {
    id: string;
    description?: string;
    type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
    port?: number;
    method?: string;
    path?: string;
    header?: Record<string, string[]>;
    timeout?: number;
    retries?: number;
    interval?: number;
    expected_body?: string;
    expected_codes?: string;
    follow_redirects?: boolean;
    allow_insecure?: boolean;
    probe_zone?: string;
    created_on?: string;
    modified_on?: string;
  };

  export interface LoadBalancerMonitors {
    browse(accountId: string): ResponseObjectPromise;

    read(accountId: string, monitorId: string): ResponseObjectPromise;

    add(accountId: string, data: Omit<LoadBalancerMonitor, 'id' | 'created_on' | 'modified_on'>): ResponseObjectPromise;

    edit(accountId: string, monitorId: string, data: Partial<LoadBalancerMonitor>): ResponseObjectPromise;

    del(accountId: string, monitorId: string): ResponseObjectPromise;

    preview(accountId: string, monitorId: string, data: any): ResponseObjectPromise;

    references(accountId: string, monitorId: string): ResponseObjectPromise;
  }

  // ─── Email Routing ────────────────────────────────────────────────────────────

  type EmailRoutingSettings = {
    id: string;
    name: string;
    enabled: boolean;
    created: string;
    modified: string;
    tag: string;
    status: 'ready' | 'unconfigured' | 'misconfigured' | 'misconfigured/locked' | 'unlocked';
    skip_wizard?: boolean;
  };

  type EmailRoutingRule = {
    id?: string;
    name?: string;
    priority?: number;
    enabled?: boolean;
    matchers: Array<{
      type: 'literal' | 'all';
      field?: 'to';
      value?: string;
    }>;
    actions: Array<{
      type: 'forward' | 'worker' | 'drop';
      value: string[];
    }>;
  };

  export interface EmailRouting {
    get(zoneId: string): ResponseObjectPromise;

    enable(zoneId: string): ResponseObjectPromise;

    disable(zoneId: string): ResponseObjectPromise;

    browseRules(zoneId: string): ResponseObjectPromise;

    readRule(zoneId: string, ruleId: string): ResponseObjectPromise;

    addRule(zoneId: string, data: Omit<EmailRoutingRule, 'id'>): ResponseObjectPromise;

    editRule(zoneId: string, ruleId: string, data: Partial<EmailRoutingRule>): ResponseObjectPromise;

    delRule(zoneId: string, ruleId: string): ResponseObjectPromise;

    getCatchAll(zoneId: string): ResponseObjectPromise;

    editCatchAll(zoneId: string, data: Partial<EmailRoutingRule>): ResponseObjectPromise;
  }

  // ─── R2 Buckets ───────────────────────────────────────────────────────────────

  type R2Bucket = {
    name: string;
    creation_date?: string;
    location?: string;
    storage_class?: string;
  };

  export interface R2Buckets {
    browse(accountId: string): ResponseObjectPromise;

    read(accountId: string, bucketName: string): ResponseObjectPromise;

    add(accountId: string, data: { name: string; locationHint?: string; storageClass?: string }): ResponseObjectPromise;

    del(accountId: string, bucketName: string): ResponseObjectPromise;
  }

  // ─── D1 Database ─────────────────────────────────────────────────────────────

  type D1DatabaseInfo = {
    uuid: string;
    name: string;
    version: string;
    num_tables?: number;
    file_size?: number;
    created_at?: string;
  };

  export interface D1Database {
    browse(accountId: string, page?: number, per_page?: number): ResponseObjectPromise;

    read(accountId: string, databaseId: string): ResponseObjectPromise;

    add(accountId: string, data: { name: string; primary_location_hint?: string }): ResponseObjectPromise;

    del(accountId: string, databaseId: string): ResponseObjectPromise;

    query(accountId: string, databaseId: string, sql: string, params?: any[]): ResponseObjectPromise;

    raw(accountId: string, databaseId: string, sql: string, params?: any[]): ResponseObjectPromise;
  }

  // ─── Queues ───────────────────────────────────────────────────────────────────

  type Queue = {
    queue_id: string;
    queue_name: string;
    created_on: string;
    modified_on: string;
    producers?: Array<{ type: string; script: string }>;
    consumers?: Array<{ type: string; script: string; settings: Record<string, any> }>;
    producers_total_count?: number;
    consumers_total_count?: number;
  };

  export interface Queues {
    browse(accountId: string): ResponseObjectPromise;

    read(accountId: string, queueId: string): ResponseObjectPromise;

    add(accountId: string, data: { queue_name: string }): ResponseObjectPromise;

    edit(accountId: string, queueId: string, data: any): ResponseObjectPromise;

    del(accountId: string, queueId: string): ResponseObjectPromise;

    browseConsumers(accountId: string, queueId: string): ResponseObjectPromise;

    addConsumer(accountId: string, queueId: string, data: {
      script_name: string;
      settings?: {
        batch_size?: number;
        max_retries?: number;
        max_wait_time_ms?: number;
      };
    }): ResponseObjectPromise;

    editConsumer(accountId: string, queueId: string, consumerId: string, data: any): ResponseObjectPromise;

    delConsumer(accountId: string, queueId: string, consumerId: string): ResponseObjectPromise;
  }

  // ─── Turnstile ────────────────────────────────────────────────────────────────

  type TurnstileWidget = {
    sitekey: string;
    name: string;
    domains: string[];
    mode: 'non-interactive' | 'invisible' | 'managed';
    bot_fight_mode?: boolean;
    clearance_level?: 'no_clearance' | 'jschallenge' | 'managed';
    offlabel?: boolean;
    created_on?: string;
    modified_on?: string;
  };

  export interface Turnstile {
    browse(accountId: string, page?: number, per_page?: number): ResponseObjectPromise;

    read(accountId: string, sitekey: string): ResponseObjectPromise;

    add(accountId: string, data: Omit<TurnstileWidget, 'sitekey' | 'created_on' | 'modified_on'>): ResponseObjectPromise;

    edit(accountId: string, sitekey: string, data: Partial<TurnstileWidget>): ResponseObjectPromise;

    del(accountId: string, sitekey: string): ResponseObjectPromise;

    rotateSecret(accountId: string, sitekey: string, data?: { invalidate_immediately?: boolean }): ResponseObjectPromise;
  }

  // ─── Logpush ──────────────────────────────────────────────────────────────────

  type LogpushJob = {
    id: number;
    name?: string;
    enabled: boolean;
    dataset: string;
    logpull_options?: string;
    destination_conf: string;
    last_complete?: string;
    last_error?: string;
    error_message?: string;
    frequency?: 'high' | 'low';
  };

  export interface Logpush {
    browseJobs(zoneId: string): ResponseObjectPromise;

    readJob(zoneId: string, jobId: number): ResponseObjectPromise;

    addJob(zoneId: string, data: {
      destination_conf: string;
      dataset: string;
      logpull_options?: string;
      ownership_challenge?: string;
      name?: string;
      enabled?: boolean;
      frequency?: 'high' | 'low';
    }): ResponseObjectPromise;

    editJob(zoneId: string, jobId: number, data: Partial<LogpushJob>): ResponseObjectPromise;

    delJob(zoneId: string, jobId: number): ResponseObjectPromise;

    getOwnershipChallenge(zoneId: string, data: { destination_conf: string }): ResponseObjectPromise;

    validateOwnership(zoneId: string, data: { destination_conf: string; ownership_challenge: string }): ResponseObjectPromise;

    validateDestination(zoneId: string, data: { destination_conf: string }): ResponseObjectPromise;
  }

  // ─── Audit Logs ───────────────────────────────────────────────────────────────

  type AuditLogEntry = {
    id: string;
    action: {
      type: string;
      result: boolean;
    };
    actor: {
      id: string;
      email: string;
      type: 'user' | 'admin' | 'Cloudflare';
      ip: string;
    };
    newValue?: string;
    oldValue?: string;
    owner: {
      id: string;
    };
    resource: {
      id: string;
      type: string;
    };
    when: string;
    interface?: string;
    metadata?: Record<string, any>;
  };

  export interface AuditLogs {
    browse(accountId: string, params?: {
      since?: string;
      before?: string;
      actor_email?: string;
      actor_ip?: string;
      action_type?: string;
      resource_type?: string;
      resource_id?: string;
      page?: number;
      per_page?: number;
      direction?: 'desc' | 'asc';
    }): ResponseObjectPromise;
  }

  // ─── Tunnels ──────────────────────────────────────────────────────────────────

  type Tunnel = {
    id: string;
    name: string;
    created_at: string;
    deleted_at?: string | null;
    connections: Array<{
      id: string;
      client_id: string;
      client_version: string;
      colo_name: string;
      is_pending_reconnect: boolean;
      opened_at: string;
      origin_ip: string;
    }>;
    conns_active_at?: string | null;
    conns_inactive_at?: string | null;
    status: 'inactive' | 'degraded' | 'healthy' | 'down';
    remote_config: boolean;
  };

  export interface Tunnels {
    browse(accountId: string): ResponseObjectPromise;

    read(accountId: string, tunnelId: string): ResponseObjectPromise;

    add(accountId: string, data: { name: string; tunnel_secret: string; config_src?: 'local' | 'cloudflare' }): ResponseObjectPromise;

    edit(accountId: string, tunnelId: string, data: { name?: string; tunnel_secret?: string }): ResponseObjectPromise;

    del(accountId: string, tunnelId: string, data?: any): ResponseObjectPromise;

    getToken(accountId: string, tunnelId: string): ResponseObjectPromise;

    getConnections(accountId: string, tunnelId: string): ResponseObjectPromise;

    cleanConnections(accountId: string, tunnelId: string, data?: any): ResponseObjectPromise;

    getConfig(accountId: string, tunnelId: string): ResponseObjectPromise;

    editConfig(accountId: string, tunnelId: string, data: any): ResponseObjectPromise;
  }
}

declare class Cloudflare {
  // Zone management
  dnsRecords: Cloudflare.DNSRecords;
  zones: Cloudflare.Zones;
  zoneSettings: Cloudflare.ZoneSettings;
  zoneCustomHostNames: Cloudflare.ZoneCustomHostNames;
  zoneSSL: Cloudflare.ZoneSSL;

  // Security & firewall
  firewall: Cloudflare.Firewall;
  filters: Cloudflare.Filters;
  rulesets: Cloudflare.Rulesets;
  pageRules: Cloudflare.PageRules;
  rateLimits: Cloudflare.RateLimits;
  waitingRooms: Cloudflare.WaitingRooms;

  // Workers
  zoneWorkers: Cloudflare.ZoneWorkers;
  zoneWorkersScript: Cloudflare.ZoneWorkersScript;
  zoneWorkersRoutes: Cloudflare.ZoneWorkersRoutes;
  enterpriseZoneWorkersScripts: Cloudflare.EnterpriseZoneWorkerScripts;
  enterpriseZoneWorkersRoutes: Cloudflare.EnterpriseZoneWorkersRoutes;
  enterpriseZoneWorkersKVNamespaces: Cloudflare.EnterpriseZoneWorkersKVNamespaces;
  enterpriseZoneWorkersKV: Cloudflare.EnterpriseZoneWorkersKV;

  // Traffic & load balancing
  loadBalancers: Cloudflare.LoadBalancers;
  loadBalancerPools: Cloudflare.LoadBalancerPools;
  loadBalancerMonitors: Cloudflare.LoadBalancerMonitors;

  // Access & tunnels
  accessApplications: Cloudflare.AccessApplications;
  argoTunnels: Cloudflare.ArgoTunnels;
  tunnels: Cloudflare.Tunnels;

  // Accounts
  accounts: Cloudflare.Accounts;
  accountMembers: Cloudflare.AccountMembers;
  accountRoles: Cloudflare.AccountRoles;

  // Media & storage
  stream: Cloudflare.Stream;
  r2Buckets: Cloudflare.R2Buckets;
  d1Database: Cloudflare.D1Database;

  // Compute
  queues: Cloudflare.Queues;
  turnstile: Cloudflare.Turnstile;

  // Email
  emailRouting: Cloudflare.EmailRouting;

  // Observability
  logpush: Cloudflare.Logpush;
  auditLogs: Cloudflare.AuditLogs;

  // User & infrastructure
  user: Cloudflare.User;
  userTokens: Cloudflare.UserTokens;
  ips: Cloudflare.CFIPs;

  constructor(auth: Cloudflare.AuthObject);
}

export = Cloudflare;
