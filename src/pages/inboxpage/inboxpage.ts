import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateconversationpagePage } from '../createconversationpage/createconversationpage';

/**
 * Generated class for the InboxpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inboxpage',
  templateUrl: 'inboxpage.html',
})
export class InboxpagePage {
fakedata=[1,2,3,4]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxpagePage');
  }
  tapshow()
  {
    this.navCtrl.push(CreateconversationpagePage)
  }

}
