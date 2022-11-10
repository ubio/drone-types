import { Schema } from '@ubio/framework';
import { ITaskError } from '../interface/index.js';

export const TaskError = new Schema<ITaskError>({
    schema: {
        type: 'object',
        required: ['name', 'message', 'scriptError'],
        properties: {
            name: { type: 'string' },
            message: { type: 'string' },
            details: { optional: true } as any,
            scriptError: { type: 'boolean' },
        }
    }
});
