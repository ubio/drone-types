import { Task, TaskCallback } from './index.js';

export interface QueuePayload {
    task: Task;
    callback: TaskCallback | null;
    sync: boolean;
}
