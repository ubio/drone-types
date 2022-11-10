import { Schema } from '@ubio/framework';
import { IDroneCachingConfig } from '../interface/index.js';

export const DroneCachingConfig = new Schema<IDroneCachingConfig>({
    schema: {
        type: 'object',
        required: ['url', 'ttlInMilliseconds', 'forceCaching', 'enabled'],
        properties: {
            url: { type: 'string' },
            ttlInMilliseconds: { type: 'integer', minimum: 0 },
            forceCaching: { type: 'boolean', default: false },
            enabled: { type: 'boolean', default: true },
            ignoreQueryParams: { type: 'boolean', default: true },
            reportWithUrls: { type: 'boolean', default: false }
        },
    },
});
