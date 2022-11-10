import { Schema } from '@ubio/framework';
import { IQueuePayload } from '../interface/index.js';
import { Task, TaskCallback } from './index.js';

export const QueuePayload = new Schema<IQueuePayload>({
    schema: {
        type: 'object',
        properties: {
            task: Task.schema,
            callback: { ...TaskCallback.schema, nullable: true },
            sync: { type: 'boolean' }
        }
    }
});
