interface ChangeTypeModel {
    listedChanges: string[];
}

interface ChangeModel extends ChangeTypeModel {}
interface AddedChangesModel extends ChangeTypeModel {}
interface FixedChangesModel extends ChangeTypeModel {}
interface RemovedChangesModel extends ChangeTypeModel {}

export interface VersionModel {
    versionNumber: number;
    releaseDate: Date;
    changes: AddedChangesModel | FixedChangesModel | RemovedChangesModel | ChangeModel;
}