import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav>
      <div class="nav-wrapper pink">
        <a class='brand-logo center'><img src="/assets/tracy-80x80.jpg" class="logo-styling z-depth-2"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a routerLink="/speaking">Speaking</a></li>
          <li><a routerLink="/about">About</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
    `
    .logo-styling {
      height: 80px;
      width: 80px;
      border-radius: 40px;
      margin: 10px;
    `
  ]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
