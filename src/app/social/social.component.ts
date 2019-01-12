import { Component, OnInit } from '@angular/core';
import {
  faGithub,
  faInstagram,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: [ './social.component.scss' ]
})
export class SocialComponent implements OnInit {

  twitterIcon: IconDefinition = faTwitter;
  githubIcon: IconDefinition = faGithub;
  instagramIcon: IconDefinition = faInstagram;

  constructor() { }

  ngOnInit() {
  }

}
