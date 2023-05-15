import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.sass']
})
export class SkillListComponent implements OnInit {
  skills: SkillModel[] = [
    { name: 'Python', logoPath: '/assets/python-logo-only.png' },
    { name: 'Angular', logoPath: "/assets/angular.png" },
    { name: 'VueJS', logoPath: "/assets/Vue.js_Logo_2.svg.png" },
    { name: 'TypeScript', logoPath: "/assets/typescript-design-assets/ts-logo-512.png" },
    { name: 'JavaScript', logoPath: "/assets/JavaScript-logo.png" },
    { name: 'SASS/SCSS', logoPath: "/assets/seal-color-aef0354c.png" },
    { name: 'CSS', logoPath: "/assets/CSS3_logo_and_wordmark.svg" },
    { name: 'Bootstrap', logoPath: "/assets/bootstrap-logo.svg" },
    { name: 'Django', logoPath: "/assets/django-logo-positive.png" },
    { name: 'Flask', logoPath: "/assets/Flask_logo.svg" },
    { name: 'Selenium', logoPath: "/assets/640px-Selenium_Logo.png" },
    { name: 'Cypress', logoPath: "/assets/idv3zwmSiY.jpeg" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
