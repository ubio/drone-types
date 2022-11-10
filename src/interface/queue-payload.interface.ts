import { ITask, ITaskCallback } from "./index.js";

export interface IQueuePayload {
    task: ITask;
    callback: ITaskCallback | null;
    sync: boolean;
}
