import { Schema } from '@ubio/framework';
import { ITaskData } from '../interface/index.js'

export const TaskData = new Schema<ITaskData>({
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
