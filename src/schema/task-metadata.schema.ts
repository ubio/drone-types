import { Schema } from '@ubio/framework';
import { TaskMetadata } from '../interface/index.js';

export const TaskMetadataSchema = new Schema<TaskMetadata>({
    schema: {
        type: 'object',
        properties: {
            architecture: {
                type: 'string',
                optional: true
            },
            provider: {
                type: 'string',
                optional: true
            },
            runtime: {
                type: 'string',
                optional: true
            },
            os: {
                type: 'string',
                optional: true
            },
            startedAt: {
                type: 'number',
                optional: true
            },
            finishedAt: {
                type: 'number',
                optional: true
            },
            droneHostname: {
                type: 'string',
                optional: true
            }
        },
    },
});
