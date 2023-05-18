import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.sass']
})
export class CopyrightComponent {
  year = new Date().getFullYear().toString();
}
