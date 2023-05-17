import { Component } from '@angular/core';
import { changelogEntries } from './data/changelog.data';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.sass']
})
export class ChangelogComponent {
  pageTitle = 'CHANGELOG';
  logEntries = changelogEntries;

  constructor() { }

  ngOnInit(): void {
  }

}
