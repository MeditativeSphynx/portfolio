import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

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
import { ChangelogComponent } from './pages/changelog/changelog.component';
import { MarkdownModule } from 'ngx-markdown';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CopyrightComponent } from './components/shared/footer/copyright/copyright.component';
import { ContentWrapperComponent } from './components/shared/content-wrapper/content-wrapper.component';
import { InterestsComponent } from './pages/interests/interests.component';

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
    TitleComponent,
    ChangelogComponent,
    FooterComponent,
    CopyrightComponent,
    ContentWrapperComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
