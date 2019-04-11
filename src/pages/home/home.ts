import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecuritypanelPage } from '../securitypanel/securitypanel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navigatetoSecurity()
  {
 this.navCtrl.setRoot(SecuritypanelPage)
  }

}
