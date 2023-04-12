import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from 'src/app/pages/resume/resume.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: '', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
