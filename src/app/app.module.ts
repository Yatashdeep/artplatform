import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{SecuritypanelPage}from'../pages/securitypanel/securitypanel'
import { TabspagePage } from '../pages/tabspage/tabspage';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { StarRatingModule } from 'ionic3-star-rating';
import{ArtprofilePage}from'../pages/artprofile/artprofile'
import{InboxpagePage}from'../pages/inboxpage/inboxpage'
import{CreateconversationpagePage}from'../pages/createconversationpage/createconversationpage'
import { EditprofilepagePage } from '../pages/editprofilepage/editprofilepage';
import{CategoryPage}from'../pages/category/category'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecuritypanelPage,
    TabspagePage,
    DashboardPage,
    ArtprofilePage,
    InboxpagePage,
    CreateconversationpagePage,
    EditprofilepagePage,
    CategoryPage
  ],
  imports: [
    BrowserModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecuritypanelPage,
    TabspagePage,
    DashboardPage,
    ArtprofilePage,
    InboxpagePage,
    CreateconversationpagePage,
    EditprofilepagePage,
    CategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
