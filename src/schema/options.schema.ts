import { Schema } from "@ubio/framework";
import { ITaskOptions, reportingLevelType } from "../interface/options.interface.js";


export const TaskOptions = new Schema<ITaskOptions>({
    schema: {
        type: 'object',
        required: ['logLevel', 'screenshotLevel', 'htmlSnapshotLevel'],
        properties: {
            logLevel: reportingLevelType,
            screenshotLevel: reportingLevelType,
            htmlSnapshotLevel: reportingLevelType,
            taskTimeoutMin: { type: 'number', optional: true }
        }
    }
});
