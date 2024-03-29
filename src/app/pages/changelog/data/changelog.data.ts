import { ChangelogEntryModel, typeOfChange } from "src/app/models/version.model";

export const changelogEntries: ChangelogEntryModel[] = [
  {
    version: "v1.3.2",
    releaseDate: new Date(2023, 10, 27),
    content: [
      {
        type: typeOfChange.Changed,
        content: `
          * Added Mr. Handyman and Vortech positions
          * Updated Amazon position
        `
      }
    ]
  },
  {
    version: "v1.3.1",
    releaseDate: new Date(2023, 4, 24),
    content: [
      {
        type: typeOfChange.Added,
        content: `
          * Site footer
            * Version badge (add to footer) ![](https://img.shields.io/github/v/tag/meditativesphynx/portfolio)
            * Link to GitHub repo for site (add to footer) ![](https://img.shields.io/badge/GitHub-Repo-blue?link=https://github.com/MeditativeSphynx/portfolio&logo=github)
            * Copyright component
          * Picture of Daniel on home page
          * Content wrapper component
          `
      },
      {
        type: typeOfChange.Fixed,
        content: `
          * Mobile wordwrap on home page
          * Top-nav icon href to '/' instead of 'home'
          `
      },
      {
        type: typeOfChange.Changed,
        content: `
          * The use of the Bootstrap CDN to Bootstrap npm package
          * Font families
          * Styles and scripts within the angular.json file
          `
      }
    ]
  },
  {
    version: "v1.2.0",
    releaseDate: new Date(2023, 4, 17),
    content: [
      {
        type: typeOfChange.Added,
        content: `
                * Site changelog page
                * Changelog to topnav
                * My photo to the welcome page
                `
      }
    ]
  },
  {
    version: "v1.1.3",
    releaseDate: new Date(2023, 4, 15),
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
    releaseDate: new Date(2023, 4, 15),
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
    releaseDate: new Date(2023, 4, 15),
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
    releaseDate: new Date(2023, 4, 15),
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
    releaseDate: new Date(2023, 3, 14),
    content: [
      {
        type: typeOfChange.Added,
        content: `* First release of the resume page.`
      }
    ]
  }
]