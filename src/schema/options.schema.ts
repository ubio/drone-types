import { Schema } from '@ubio/framework';
import { TaskOptions, reportingLevelType } from '../interface/options.interface.js';

export const TaskOptionsSchema = new Schema<TaskOptions>({
    schema: {
        type: 'object',
        required: ['logLevel', 'screenshotLevel', 'htmlSnapshotLevel'],
        properties: {
            logLevel: reportingLevelType,
            screenshotLevel: reportingLevelType,
            htmlSnapshotLevel: reportingLevelType,
            taskTimeoutMin: { type: 'number', optional: true },
        },
    },
});
