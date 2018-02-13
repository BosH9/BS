import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Booking } from '../../modals/booking';
import { InvoicePage } from '../invoice/invoice';

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
    let b1 = new Booking("1",null,"02-01-2005","02-01-2018",3,2000.00,null,"02-01-2017","02-01-2017","Y","P");
    let b2 = new Booking("2",null,"01-01-2018","01-02-2018",3,2000.00,"12324","02-01-2017","02-01-2017","Y","D");
    let b3 = new Booking("3",null,"01-01-2016","01-02-2016",4,2400.00,"12323","02-01-2017","02-01-2017","Y","D");
    
    this.bookings=[b1,b2,b3];
  }
  gotoInvoice(id:string){
    this.navCtrl.push(InvoicePage);
  }

}
