import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: [ './mobile-menu.component.scss' ]
})
export class MobileMenuComponent implements OnInit {

  navLinks: any[];

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'About',
        link: './about',
        index: 0
      }, {
        label: 'Home',
        link: './home',
        index: 1
      }, {
        label: 'Social',
        link: './social',
        index: 2
      },
    ];
  }

  ngOnInit() {
  }
}
