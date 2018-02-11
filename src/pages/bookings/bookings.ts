import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Booking } from '../../modals/booking';

/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {
  bookings:Booking[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mybookings();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }
  mybookings(){
    let b1 = new Booking("1",null,"01-01-2005","02-01-2017",3,2000.00,"2323","02-01-2017","02-01-2017","Y",);
    let b2 = new Booking("2",null,"01-01-2018","01-02-2018",3,2000.00,"2323","02-01-2017","02-01-2017","Y",);
    
    this.bookings=[b1,b2];
  }

}
