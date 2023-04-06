import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SkillsComponent } from './pages/resume/skills/skills.component';
import { JobHistoryComponent } from './pages/resume/job-history/job-history.component';
import { JobComponent } from './pages/resume/job-history/job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SkillsComponent,
    JobHistoryComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
