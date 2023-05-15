import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.sass']
})
export class SkillListComponent implements OnInit {
  skills: SkillModel[] = [
    { name: 'Python', logoPath: '/assets/python-logo-only.png', years: 4 },
    { name: 'Angular', logoPath: "/assets/angular.png", years: 1 },
    { name: 'VueJS', logoPath: "/assets/Vue.js_Logo_2.svg.png", years: 1 },
    { name: 'TypeScript', logoPath: "/assets/typescript-design-assets/ts-logo-512.png", years: 2 },
    { name: 'JavaScript', logoPath: "/assets/JavaScript-logo.png", years: 4 },
    { name: 'SASS/SCSS', logoPath: "/assets/seal-color-aef0354c.png", years: 1},
    { name: 'CSS', logoPath: "/assets/CSS3_logo_and_wordmark.svg", years: 4 },
    { name: 'Bootstrap', logoPath: "/assets/bootstrap-logo.svg", years: 4 },
    { name: 'Django', logoPath: "/assets/django-logo-positive.png", years: 2 },
    { name: 'Flask', logoPath: "/assets/Flask_logo.svg", years: 2 },
    { name: 'Selenium', logoPath: "/assets/640px-Selenium_Logo.png", years: 3 },
    { name: 'Cypress', logoPath: "/assets/idv3zwmSiY.png", years: 2 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
