import { Schema } from '@ubio/framework';
import { v4 as uuid } from 'uuid';
import { Task } from '../interface/index.js';
import { TaskDataSchema, TaskErrorSchema, TaskMetadataSchema, TaskOptionsSchema } from './index.js';

export const TaskSchema = new Schema<Task>({
    schema: {
        type: 'object',
        properties: {
            id: { type: 'string' },
            serviceId: { type: 'string' },
            inputs: { type: 'array', items: TaskDataSchema.schema },
            outputs: { type: 'array', items: TaskDataSchema.schema },
            options: TaskOptionsSchema.schema,
            error: { ...TaskErrorSchema.schema, optional: true },
            startedAt: { type: 'integer' },
            finishedAt: { type: 'integer', optional: true },
            metadata: { ...TaskMetadataSchema.schema, optional: true },
        },
    },
    defaults: () => {
        return {
            id: uuid(),
            inputs: [],
            outputs: [],
            startedAt: Date.now(),
        };
    },
});
