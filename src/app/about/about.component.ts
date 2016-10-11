import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="row margin-top-50">
    <div *ngFor='let picture of pictures' class="col s3 m3 l3">
      <div class="card">
        <div class="card-image">
          <img src="/assets/{{picture.image}}">
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-panel">
          <h2 class="teal-text center-align">Tracy Lee | @ladyleet</h2>

          <p class='margin-top-30'>Tracy is a speaker, serial entrepreneur, developer, and taker of selfies. She has helped start 10+ companies over the past 14 years and continues her journey to try and create value and meaning in peoples' lives by building great things.</p>

          <p>Tracy is passionate about MVC frameworks and the latest JavaScript technologies. She runs the Modern Web podcast &amp; conferences, loves open source, building community, and most of all, cli tools.</p>

          <p>In addition to helping organize various events in the JS community such as Global Ember Meetup, serving as track chair for QConSF, and creating ng-cruise, she focuses on empowering large teams with mentorship and apprenticeship through EmberSherpa.</p>

          <p>You can find more at <a href="http://modern-web.org">modern-web.org</a> and <a href="http://embersherpa.com">embersherpa.com</a> or follow her on Twitter <a href="http://twitter.com/ladyleet">@ladyleet</a>.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="/assets/tracy-lee-react-2.jpg">
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    .margin-top-30 {
      margin-top: 30px;
    }

    .margin-top-50 {
      margin-top: 50px;
    }
    `
  ]
})
export class AboutComponent implements OnInit {

  pictures: Pictures[] = [
    {image: 'tracy-lee-angular-connect-1.jpg'},
    {image: 'tracy-lee-react-1.jpg'},
    {image: 'tracy-lee-angular-connect.jpg'},
    {image: 'tracy-lee-react.jpg'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
