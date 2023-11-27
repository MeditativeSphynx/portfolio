import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from 'src/app/pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';
import { ChangelogComponent } from './pages/changelog/changelog.component';
// import { InterestsComponent } from './pages/interests/interests.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: '', component: HomeComponent },
  { path: 'changelog', component: ChangelogComponent },
  // { path: 'interests', component: InterestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
