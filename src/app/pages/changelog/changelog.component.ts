import { Component } from '@angular/core';
import { ChangelogEntryModel, typeOfChange } from 'src/app/models/version.model';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.sass']
})
export class ChangelogComponent {
  pageTitle = 'CHANGELOG';
  changelogEntries: ChangelogEntryModel[] = [
    {
      version: "v1.1.0",
      releaseDate: new Date(2023, 5, 15),
      content: [
        {
          type: typeOfChange.Added,
          content: `
          * Home page and content
          * A page header component
          * Logos for the skills in the skills list component
          * Icons`
        },
        {
          type: typeOfChange.Changed,
          content: `
          * Moved the skills to a left hand column
          * The order of job history to most relevant
          * Made a number of style changes to the resume page`
        }
      ]
    },
    {
      version: "v1.0",
      releaseDate: new Date(2023, 4, 14),
      content: [
        {
          type: typeOfChange.Added,
          content: `* First release of the resume page.`
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
