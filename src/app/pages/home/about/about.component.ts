import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  content = [`
    Hi, I’m so happy that you are here! My name is Daniel and I have been working as 
    a web developer for four years. If you have already seen my resume, you probably 
    noticed that my degree is in biological sciences with a minor in chemistry. How 
    did I end up as a web developer? Well, I’m glad that you asked.`,
    `Well it started 
    in college. While I was getting my degree I was teaching myself HTML, CSS, and 
    JavaScript. When I graduated and started working as a safety specialist for 
    consumer products, I continued that education and added Python to my personal 
    curriculum. During my time as a safety specialist, I taught myself how to write 
    macros in Excel using VBA. Picking up that skill allowed me to streamline my 
    work and to help others on other teams with complicated workbooks.`,
    `For the next two years I grew my JavaScript and Python skills. Those skills 
    became robust enough for me to land my first position as a Quality Assurance 
    Developer. In that position I wrote automation scripts for testing the websites 
    that my team developed. However, my manager saw my skills as a web developer 
    entrusted me with a number of developer tasks. Those tasks included everything 
    from maintenance to refactoring our backend to use Amazon S3 service as our CDN 
    instead of the local file system.`
  ];

  formattedContent!: string;

  constructor() { }

  ngOnInit(): void { }

}
