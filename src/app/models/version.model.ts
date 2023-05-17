export enum typeOfChange {
    Added,
    Changed,
    Fixed,
    Removed
}

interface ChangeTypeEntry {
    type: typeOfChange;
    content: string;
}

export interface ChangelogEntryModel {
    version: string;
    releaseDate: Date;
    content: ChangeTypeEntry[];
}