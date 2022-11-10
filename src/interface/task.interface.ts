import { TaskData, TaskError, TaskMetadata, TaskOptions } from './index.js';

export interface Task {
    id: string;
    serviceId: string;
    inputs: TaskData[];
    outputs: TaskData[];
    error?: TaskError;
    startedAt: number;
    finishedAt?: number;
    options: TaskOptions;
    metadata?: TaskMetadata;
}
