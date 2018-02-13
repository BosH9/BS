import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ChooseYourBikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-choose-your-bike',
  templateUrl: 'choose-your-bike.html',
})
export class ChooseYourBikePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseYourBikePage');
  }
  select(){
    this.viewCtrl.dismiss().then(()=>{
      let views= this.navCtrl.getViews();
      let actchild= this.navCtrl.getActiveChildNav();
      let alchildnav= this.navCtrl.getActiveChildNavs();
      let alchildnavs= this.navCtrl.getAllChildNavs();
      let i1= this.navCtrl.getByIndex(1);
      let i2= this.navCtrl.getByIndex(2);
      let i3= this.navCtrl.getByIndex(3);
      let i0= this.navCtrl.getByIndex(0);
      let x= this.navCtrl.first();
      
    });
  }
}
