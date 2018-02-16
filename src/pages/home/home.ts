import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { BookPage } from '../../pages/book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  onBook(){
    //this.navCtrl.push(BookPage);

    let modal = this.modalCtrl.create(BookPage);
    modal.present();
  }

}
