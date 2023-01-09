import { Schema } from '@ubio/framework';
import { TaskError } from '../interface/index.js';

export const TaskErrorSchema = new Schema<TaskError>({
    schema: {
        type: 'object',
        required: ['name', 'message', 'scriptError'],
        properties: {
            name: { type: 'string' },
            message: { type: 'string' },
            details: { optional: true } as any,
            scriptError: { type: 'boolean' },
        },
    },
});
