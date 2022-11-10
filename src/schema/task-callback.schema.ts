import { Schema } from '@ubio/framework';
import { TaskCallback } from '../interface/index.js';

export const TaskCallbackSchema = new Schema<TaskCallback>({
    schema: {
        type: 'object',
        properties: {
            url: { type: 'string' },
            headers: {
                type: 'object',
                properties: {},
                additionalProperties: { type: 'string' },
            },
        }
    }
});
