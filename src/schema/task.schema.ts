import { Schema } from '@ubio/framework';
import { v4 as uuid } from 'uuid';
import { ITask } from '../interface/index.js';
import { TaskData, TaskError, TaskMetadata, TaskOptions } from './index.js';

export const Task = new Schema<ITask>({
    schema: {
        type: 'object',
        properties: {
            id: { type: 'string' },
            serviceId: { type: 'string' },
            inputs: { type: 'array', items: TaskData.schema },
            outputs: { type: 'array', items: TaskData.schema },
            options: TaskOptions.schema,
            error: { ...TaskError.schema, optional: true },
            startedAt: { type: 'integer' },
            finishedAt: { type: 'integer', optional: true },
            metadata: { ...TaskMetadata.schema, optional: true }
        }
    },
    defaults: () => {
        return {
            id: uuid(),
            inputs: [],
            outputs: [],
            startedAt: Date.now(),
        };
    }
});
