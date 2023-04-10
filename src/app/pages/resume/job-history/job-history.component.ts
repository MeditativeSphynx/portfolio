import { Component, OnInit } from '@angular/core';

import { JobModel } from 'src/app/models/job.model';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.sass']
})
export class JobHistoryComponent implements OnInit {
  jobs: JobModel[] = [
    {
      company: 'Supreme Veteran Logistics',
      title: 'Delivery Driver (Amazon)',
      startedDate: new Date('2022-10-1'),
      isCurrent: true,
      endDate: new Date(),
      accomplishments: [
        'Top company driver on multiple occasions'
      ]
    },
    {
      company: 'Samaritan\'s Purse',
      title: 'Web Application Developer',
      startedDate: new Date('2022-1-1'),
      isCurrent: false,
      endDate: new Date('2022-7-29'),
      accomplishments: ['Website redesign', 'Cypress test writing']
    },
    {
      company: 'Answers in Genesis',
      title: 'Quality Assurance Developer / Web Developer',
      startedDate: new Date('2019-6-1'),
      isCurrent: false,
      endDate: new Date('2022-1-1'),
      accomplishments: [
        'Development of QA systems and procedures',
        'Development of web appliactions that manages Python scripts meant for Selenium testing',
        'Development of program that screenshots target pages of site for pre- and post-deployment',
        'Headed the migration of automated testing from Katalon and Selenium to Cypress',
        'Refactoring of CDN backend to work with S3 instead of the local system'
      ]
    },
    {
      company: 'ATL',
      title: 'Regulatory Affairs Specialist / Chemical Safety Researcher',
      startedDate: new Date('2017-1-1'),
      isCurrent: false,
      endDate: new Date('2019-7-1'),
      accomplishments: [
        'Using VBA within Excel to automate the consolidation of research data',
        'Using VBA within Excel to reduce the time of data processing from hours to minutes',
        'Indepth research and documenting of chemical safe for human use',
        'Project management for multiple clients'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
