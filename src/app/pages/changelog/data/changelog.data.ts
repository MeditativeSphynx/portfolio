import { ChangelogEntryModel, typeOfChange } from "src/app/models/version.model";

export const changelogEntries: ChangelogEntryModel[] = [
    {
        version: "v1.2.0",
        releaseDate: null,
        content: [
            {
                type: typeOfChange.Added,
                content: `
                * Changelog page
                `
            }
        ]
    },
    {
        version: "v1.1.3",
        releaseDate: new Date(2023, 5, 15),
        content: [
            {
                type: typeOfChange.Fixed,
                content: `
                * The date showing as NAN/NAN or Invalid date on IOS devices
                `
            }
        ]
    },
    {
        version: "v1.1.2",
        releaseDate: new Date(2023, 5, 15),
        content: [
            {
                type: typeOfChange.Fixed,
                content: `
                * The Cypress logo
                ` 
            }
        ]
    },
    {
        version: "v1.1.1",
        releaseDate: new Date(2023, 5, 15),
        content: [
            {
                type: typeOfChange.Fixed,
                content: `
                * The description of the order of job history
                * The years pills on skills
                `
            }
        ]
    },
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
          * Icons
          `
        },
        {
          type: typeOfChange.Changed,
          content: `
          * Moved the skills to a left hand column
          * The order of job history to most relevant
          * Made a number of style changes to the resume page
          `
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