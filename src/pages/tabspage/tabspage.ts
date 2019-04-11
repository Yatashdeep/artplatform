import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { ArtprofilePage } from '../artprofile/artprofile';

/**
 * Generated class for the TabspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabspage',
  templateUrl: 'tabspage.html',
})
export class TabspagePage {
  tab1Root: any = DashboardPage;
  tab2Root: any = DashboardPage;
  tab3Root:any=DashboardPage;
  tab4Root:any=DashboardPage;
  tab5Root:any=ArtprofilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabspagePage');
  }

}
