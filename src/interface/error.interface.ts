export interface TaskError {
    name: string;
    message: string;
    details?: any;
    scriptError: boolean;
}
