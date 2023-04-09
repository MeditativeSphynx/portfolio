import { Component, OnInit } from '@angular/core';

import { JobModel } from 'src/app/models/job.model';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.sass']
})
export class JobHistoryComponent implements OnInit {
  jobs: JobModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
