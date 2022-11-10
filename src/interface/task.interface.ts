import { ITaskData, ITaskError, ITaskMetadata, ITaskOptions } from './index.js';

export interface ITask {
    id: string;
    serviceId: string;
    inputs: ITaskData[];
    outputs: ITaskData[];
    error?: ITaskError;
    startedAt: number;
    finishedAt?: number;
    options: ITaskOptions;
    metadata?: ITaskMetadata;
}
