import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpeakingComponent }  from './speaking/speaking.component';
import { SpeakingPastComponent }  from './speaking/speaking-past.component';
import { ProjectsComponent }  from './projects/projects.component';
import { AboutComponent }  from './about/about.component';
import { HireMeComponent }  from './hire-me/hire-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SpeakingComponent,
    ProjectsComponent,
    AboutComponent,
    HireMeComponent,
    SpeakingPastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: SpeakingComponent },
      { path: 'speaking', component: SpeakingComponent },
      { path: 'speaking/previous', component: SpeakingPastComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'hire-me', component: HireMeComponent },
      { path: 'about', component: AboutComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
