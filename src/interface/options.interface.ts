export type ReportingLevel = 'debug' | 'info' | 'error' | 'mute';

export interface TaskOptions {
    logLevel: ReportingLevel;
    screenshotLevel: ReportingLevel;
    htmlSnapshotLevel: ReportingLevel;
    taskTimeoutMin?: number;
    disableCache?: boolean;
}

export const reportingLevelType = {
    type: 'string' as const,
    enum: ['mute', 'debug', 'error', 'info'],
};
