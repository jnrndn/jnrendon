import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { firebaseConfig } from '../environments/firebase.config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { MobileMenuComponent } from './shared/mobile-menu/mobile-menu.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileMenuComponent,
    AboutComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
