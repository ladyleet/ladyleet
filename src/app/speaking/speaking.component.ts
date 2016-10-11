import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaking',
  template: `
    <div class='container'>
      <div class='row'>
        <div class='col s12'>
          <h2 class="teal-text center-align">Speaking Engagements</h2>
        </div>
      </div>
      <div class='row'>
      <div class='col s12'>
        <h4 class="teal-text">Upcoming</h4>
      </div>
        <div *ngFor='let event of upcoming' class='col s12'>
          <div class='card-panel'>
            <div>
              <h5><a href='{{event.confLink}}'>{{event.confName}}</a></h5>
              <p>{{event.confDate}}, {{event.confCity}}, {{event.confState}}</p>
              <h5>{{event.confTalkTitle}}</h5>
              <p>{{event.confTalkBrief}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class='row'>
      <div class='col s12'>
        <h4 class="teal-text">Past</h4>
      </div>
      <div class='col s12'>
        <div class='card-panel'>
          <div>
            hi there is some text here
          </div>
        </div>
      </div>
      </div>
    </div>
  `,
  styles: []
})
export class SpeakingComponent implements OnInit {

  upcoming: Upcoming[] = [
  {
  confName: 'AngularUp',
  confLink: 'www.angular-up.com',
  confCity: 'Tel Aviv',
  confState: 'Israel',
  confDate: 'Nov 17, 2016',
  confTalkTitle: 'Getting Started in Angular 2 with Angular-CLI',
  confTalkBrief: 'Watch a live code session of an Angular 2 Angular-CLI application and see how easy it is to use this new framework and why it is great for quickly prototyping ideas and why it is being used to scale across large scale organizations. We will discuss the features of the CLI, the Angular 2 component structure, the newest new router, using directives, and template-driven forms.',
  confStatus: 'active'
  },
  {
  confName: 'NgPoland',
  confLink: 'http://ng-poland.pl/',
  confCity: 'Warsaw',
  confState: 'Poland',
  confDate: 'Nov 21-22, 2016',
  confTalkTitle: 'Using Angular-CLI to Deploy an Angular 2 App Using Firebase in 30 Minutes',
  confTalkBrief: 'Do you think it’s possible to live code an Angular 2 app, create a backend, and deploy it in one talk? With the convenience of Angular-CLI and a little help from Firebase and material design, see how easy it is to create apps with Angular 2 and why this new framework is the great for quickly prototyping ideas and is built to scale large applications across distributed teams.',
  confStatus: 'active'
  },
  {
  confName: 'DevFestNC',
  confLink: '',
  confCity: 'Raleigh',
  confState: 'NC',
  confDate: 'Dec 3, 2016',
  confTalkTitle: 'Using Angular-CLI to Deploy an Angular 2 App Using Firebase in 30 Minutes',
  confTalkBrief: 'Do you think it’s possible to live code an Angular 2 app, create a backend, and deploy it in one talk? With the convenience of Angular-CLI and a little help from Firebase and material design, see how easy it is to create apps with Angular 2 and why this new framework is the great for quickly prototyping ideas and is built to scale large applications across distributed teams.',
  confStatus: 'active'
  },
  {
  confName: 'DevFestNL',
  confLink: 'https://devfest.nl/',
  confCity: 'Amsterdam',
  confState: 'Netherlands',
  confDate: 'Oct 8, 2016',
  confTalkTitle: 'The Tale of 3 CLIs - Ember, Angular, and React',
  confTalkBrief: 'Ember-CLI, Angular-CLI, and Create-React-App are necessities to web development, and many who have not had exposure to such wonderful technologies wonder what they are actually missing. This talk will show you how easy it is to scaffold up all 3 projects in less than 30 minutes, how to shave days, even weeks, off your development cycle, and why you should choose convention over configuration.',
  confStatus: 'complete'
  },
  {
  confName: 'Silicon Valley Code Camp',
  confLink: 'https://www.siliconvalley-codecamp.com',
  confCity: 'San Jose',
  confState: 'CA',
  confDate: 'Oct 1-2, 2016',
  confTalkTitle: 'From 0 to Developer',
  confTalkBrief: 'How you can become a junior developer in just 3 weeks using awesome frameworks like Ember.js and Angular.js. We’ll explore how to get productive in just 3 weeks from knowing nothing about code to building real apps. We’ll live code up an ember and/or angular app so you can see how easy it is using 2 great MVC frameworks out there.',
  confStatus: 'complete'
  },
  {
  confName: 'Silicon Valley Code Camp',
  confLink: 'https://www.siliconvalley-codecamp.com',
  confCity: 'San Jose',
  confState: 'CA',
  confDate: 'Oct 1-2, 2016',
  confTalkTitle: 'The Tale of 2 CLIs - Ember and Angular',
  confTalkBrief: 'Ember-CLI and Angular-CLI are necessities to web development, and many who have not had exposure to such wonderful technologies wonder what they are actually missing. This talk will show you how easy it is to scaffold up both an ember and angular project in less than 30 minutes, how to shave days, even weeks, off your development cycle, and why you should always choose convention over configuration.',
  confStatus: 'complete'
  },
  {
  confName: 'AngularConnect',
  confLink: 'http://angularconnect.com/',
  confCity: 'London',
  confState: 'UK',
  confDate: 'Sept 27-28, 2016',
  confTalkTitle: 'Learning the New Tech Lingua Franca: Social Media',
  confTalkBrief: 'Whether you are a developer or business person in the tech community, you must understand the lingua franca of the tech community: social media. Business no longer gets done behind closed doors, but online through various mediums such as Twitter and Github. This talk walks you through the reasons to have a presence as a developer, recruiter, CEO, or marketer and why communicating through social mediums is required for you to succeed. We will talk about the dos and donts of interaction and walk through a practical approach to building your social presence.',
  confStatus: 'complete'
  }];

  constructor() { }

  ngOnInit() {
  }

}
