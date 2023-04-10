import { Component, Input, OnInit } from '@angular/core';

import { JobModel } from 'src/app/models/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.sass']
})
export class JobComponent implements OnInit {
  @Input() job!: JobModel;

  constructor() { }

  ngOnInit(): void {
  }

}
