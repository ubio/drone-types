export interface IDroneCachingConfig {
    url: string;
    ttlInMilliseconds: number;
    forceCaching: boolean;
    enabled: boolean;
    ignoreQueryParams: boolean;
    reportWithUrls: boolean;
}
