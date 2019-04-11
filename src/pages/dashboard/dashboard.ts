import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
fakedata=[1,2,3,4]
showcat:boolean
catshow:boolean
pet
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.showcat=true
  this.catshow=true 
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.pet='recentuploads'
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
  onSegmentChanged(ev)
  {
 console.log('ev',ev.value)
 if(ev.value=='top_performers')
 {
   this.catshow=false
 }
 else{
  this.catshow=true
 }
  }

}
