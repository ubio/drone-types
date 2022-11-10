import { Schema } from '@ubio/framework';
import { TaskData } from '../interface/index.js'

export const TaskDataSchema = new Schema<TaskData>({
    schema: {
        type: 'object',
        required: ['key', 'data', 'timestamp'],
        properties: {
            key: { type: 'string', minLength: 1 },
            data: {} as any,
            timestamp: { type: 'integer' }
        }
    }
});
