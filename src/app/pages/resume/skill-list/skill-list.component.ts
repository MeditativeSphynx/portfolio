import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.sass']
})
export class SkillListComponent implements OnInit {
  skills = [
    { name: 'Python' },
    { name: 'Angular' },
    { name: 'VueJS' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'SASS/SCSS' },
    { name: 'CSS' },
    { name: 'Bootstrap' },
    { name: 'Django' },
    { name: 'Flask' },
    { name: 'Selenium' },
    { name: 'Cypress' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
