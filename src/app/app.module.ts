import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SkillListComponent } from './pages/resume/skill-list/skill-list.component';
import { JobHistoryComponent } from './pages/resume/job-history/job-history.component';
import { JobComponent } from './pages/resume/job-history/job/job.component';
import { SkillComponent } from './pages/resume/skill-list/skill/skill.component';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { EducationComponent } from './pages/resume/education/education.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/home/about/about.component';
import { TitleComponent } from './components/shared/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SkillListComponent,
    JobHistoryComponent,
    JobComponent,
    SkillComponent,
    TopNavComponent,
    EducationComponent,
    HomeComponent,
    AboutComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
