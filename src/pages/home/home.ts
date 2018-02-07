import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookPage } from '../../pages/book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onBook(){
    this.navCtrl.push(BookPage);
  }

}
