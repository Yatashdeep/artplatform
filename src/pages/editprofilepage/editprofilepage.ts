import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the EditprofilepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofilepage',
  templateUrl: 'editprofilepage.html',
})
export class EditprofilepagePage {

  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilepagePage');
  }
  tapshow()
  {
    this.viewCtrl.dismiss()
  }

}
