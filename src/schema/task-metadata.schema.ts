import { Schema } from '@ubio/framework';
import { ITaskMetadata } from '../interface/index.js';

export const TaskMetadata = new Schema<ITaskMetadata>({
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
