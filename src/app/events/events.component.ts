import { Component, OnInit } from '@angular/core';
import { upcoming } from './upcoming.model';

@Component({
  selector: 'app-events',
  template: `
    <div class='container'>
      <div class='row margin-top-50'>
        <div class='col s12'>
          <h2 class="teal-text center-align">Events</h2>
        </div>
      </div>
      <div class='row'>
        <div class='col s6 center-align'>
          <h4><a routerLink="/events">Upcoming</a></h4>
        </div>
        <div class='col s6 center-align'>
          <h4><a routerLink="/events/previous">Past</a></h4>
        </div>
      </div>
      <div class='row'>
        <div class='col s12'>
          <div class='card-panel'>
            <div>
              <h5><a href='#'>Event Name</a></h5>
              <p>Date, City, State</p>
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
    `]
})

export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
