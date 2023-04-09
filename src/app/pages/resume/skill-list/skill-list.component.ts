import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.sass']
})
export class SkillListComponent implements OnInit {
  skills: SkillModel[] = [
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
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
