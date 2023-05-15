export interface JobModel {
    relevance: number;
    company: string;
    title: string;
    startedDate: Date;
    isCurrent: boolean;
    endDate: Date;
    accomplishments: string[];
}