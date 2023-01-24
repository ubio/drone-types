import { Schema } from '@ubio/framework';

import { QueuePayload } from '../interface/index.js';
import { TaskCallbackSchema, TaskSchema } from './index.js';

export const QueuePayloadSchema = new Schema<QueuePayload>({
    schema: {
        type: 'object',
        properties: {
            task: TaskSchema.schema,
            callback: { ...TaskCallbackSchema.schema, nullable: true },
            sync: { type: 'boolean' },
        },
    },
});
