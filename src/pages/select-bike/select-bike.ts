import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { AddBikeDetailsPage } from '../add-bike-details/add-bike-details';
import { ChooseYourBikePage } from '../choose-your-bike/choose-your-bike';
import { MyBikesPage } from '../my-bikes/my-bikes';

/**
 * Generated class for the SelectBikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-bike',
  templateUrl: 'select-bike.html',
})
export class SelectBikePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectBikePage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  addBike(){
    
    let modal = this.modalCtrl.create(AddBikeDetailsPage);
    modal.onDidDismiss(data=>{
      console.log(data);
    });
    modal.present();
    this.dismiss();
  }
  selectYourBike(){
    let modal = this.modalCtrl.create(MyBikesPage);
    modal.onDidDismiss(data=>{
      console.log(data);
    })
    modal.present();
    this.dismiss();
    
  }
}
