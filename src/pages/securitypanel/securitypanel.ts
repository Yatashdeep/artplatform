import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { TabspagePage } from '../tabspage/tabspage';

/**
 * Generated class for the SecuritypanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-securitypanel',
  templateUrl: 'securitypanel.html',
})
export class SecuritypanelPage {
  user:boolean
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecuritypanelPage');
    this.user=false
    document.getElementById('reg').style.backgroundColor="transparent"
    document.getElementById('regp').style.color="#fff"
    document.getElementById('log').style.backgroundColor="#fff"   
    document.getElementById('logp').style.color="#000"
    // document.getElementById('strip-box').style.border='2px solid #ffff !important'
 
  }
  navigatebar(id){
    if(id==2)
    {
     document.getElementById('log').style.backgroundColor="transparent"   
     document.getElementById('logp').style.color="#fff"
     document.getElementById('reg').style.backgroundColor="#fff"
      document.getElementById('regp').style.color="#000"
      this.user=true
    }
    else{
      document.getElementById('reg').style.backgroundColor="transparent"
      document.getElementById('regp').style.color="#fff"
      document.getElementById('log').style.backgroundColor="#fff"   
      document.getElementById('logp').style.color="#000"
      this.user=false
    }
  }
  checkalert(){
    let alert = this.alertCtrl.create({
     title: 'Forget Password',
     inputs: [
       {
         name: 'Email',
         placeholder: 'Email'
       }
     ],
     buttons: [
       {
         text: 'Send',
         handler: data => {
           console.log('Cancel clicked');
         }
       }
      
     ]
   });
   alert.present();
 }
 navigatetotab()
 {
   this.navCtrl.setRoot(TabspagePage)
 }
}
