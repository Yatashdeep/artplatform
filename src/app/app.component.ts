import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SecuritypanelPage } from '../pages/securitypanel/securitypanel';
import { TabspagePage } from '../pages/tabspage/tabspage';
import{CreateconversationpagePage}from'../pages/createconversationpage/createconversationpage'
import { EditprofilepagePage } from '../pages/editprofilepage/editprofilepage';
import { CategoryPage } from '../pages/category/category';
import { ArtprofilePage } from '../pages/artprofile/artprofile';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

