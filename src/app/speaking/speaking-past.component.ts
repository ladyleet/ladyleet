import { Component, OnInit } from '@angular/core';
import { upcoming } from './upcoming.model';

@Component({
  selector: 'app-speaking-past',
  template: `
  <div class='container'>
    <div class='row margin-top-50'>
      <div class='col s12'>
        <h2 class="teal-text center-align">Speaking Engagements</h2>
      </div>
    </div>
    <div class='row'>
      <div class='col s6 center-align'>
        <h4><a routerLink="/speaking">Upcoming</a></h4>
      </div>
      <div class='col s6 center-align'>
        <h4><a routerLink="/speaking/previous">Previous</a></h4>
      </div>
    </div>
    <div class='row'>
      <div *ngFor='let event of completed' class='col s12'>
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
  </div>
  `,
  styles: [
    `
    .margin-top-50 {
      margin-top: 50px;
    }
    `
  ]
})
export class SpeakingPastComponent implements OnInit {

  upcoming = upcoming;

  get completed() {
    return this.upcoming.filter(x => x.confStatus ==='complete');
  }

  constructor() { }

  ngOnInit() {
  }

}
