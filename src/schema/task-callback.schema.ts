import { Schema } from '@ubio/framework';
import { ITaskCallback } from '../interface/index.js';

export const TaskCallback = new Schema<ITaskCallback>({
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
