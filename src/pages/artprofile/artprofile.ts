import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { InboxpagePage } from '../inboxpage/inboxpage';
import { EditprofilepagePage } from '../editprofilepage/editprofilepage';
import { CategoryPage } from '../category/category';

/**
 * Generated class for the ArtprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artprofile',
  templateUrl: 'artprofile.html',
})
export class ArtprofilePage {
  fakedata=[1,2,3,4]
  showcat:boolean
  showshare:boolean
count=1
playlist
  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.showcat=true
this.showshare=false 
this.playlist='latest'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtprofilePage');
  }
  showcatevent(id)
  {
    if(id==1)
    {
    this.showcat=false
    document.getElementById('categorylist').style.height='300px'
    }
    else{
      this.showcat=true
      document.getElementById('categorylist').style.height='120px'
    }
  }
  tapshow()
  {
   
    
    if(this.count%2!=0)
    {
        this.showshare=true
    }
    else
    {
      this.showshare=false
    }
    this.count++
  }
  inboxtap()
  {
    this.navCtrl.push(InboxpagePage)
  }
  editprop()
  {
let contactmodal=this.modalCtrl.create(EditprofilepagePage)
contactmodal.present() 
}
changeprefrence()
{
  this.navCtrl.push(CategoryPage)
}

}
