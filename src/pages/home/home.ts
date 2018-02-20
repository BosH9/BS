import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

import { BookPage } from '../../pages/book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController
  ,public viewCtrl: ViewController) {

  }
  onBook(){
    //this.navCtrl.push(BookPage);
   // this.navCtrl.setRoot(BookPage);
  // this.navCtrl.setRoot(BookPage, {}, {animate: true, direction: 'forward'})
    // let modal = this.modalCtrl.create(BookPage);
    // modal.present();
    this.navCtrl.push(BookPage, {}, {animate: true, direction: 'forward'})

  }

}
