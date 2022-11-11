import { TaskCallback, TaskOptions } from "./index.js";

export interface TaskRunSyncParams {
    taskId: string | null;
    serviceId: string;
    inputs: Record<string, any>;
    options: Partial<TaskOptions> | null;
}

export interface TaskRunParams extends TaskRunSyncParams {
    callback: TaskCallback;
}
