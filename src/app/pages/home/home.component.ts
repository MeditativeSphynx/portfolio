import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() {
    document.getElementById('site-footer')?.setAttribute(
      'class', document.getElementById('site-footer')?.getAttribute('class') + ' home-footer'
    );
  }

  ngOnInit(): void {
  }

}
