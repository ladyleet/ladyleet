import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav>
      <div class="nav-wrapper pink">
        <a href="#" class="brand-logo center"><3</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a routerLink="/speaking">Speaking</a></li>
          <li><a routerLink="/projects">Projects</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/hire-me">Hire Me</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
