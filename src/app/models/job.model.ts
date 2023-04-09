export interface JobModel {
    company: string;
    title: string;
    startedDate: Date;
    isCurrent: boolean;
    endDate: Date;
    accomplishments: string[];
}