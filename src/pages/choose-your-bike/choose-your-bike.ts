import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Bike } from '../../modals/bike';
import { BookPage } from '../book/book';

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
  bikes:Bike[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public viewCtrl: ViewController) {
      this.bikes=[];
      this.getMyBikes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseYourBikePage');
  }
  select(bike:Bike){
    let data = { 'id':bike.id,'registrationModel': bike.registrationModel,'model' : bike.model,image : bike.image };
    //this.viewCtrl.dismiss(data);
    this.navCtrl.push(BookPage,data);
  }
  getMyBikes(){
    
    let b1 = new Bike(1,"AP 24 L 2068","PASSION PLUS","assets/imgs/motorcycle_32x32.png",2005,"01-01-2005",null,"Y","02-01-2017");
    let b2 = new Bike(2,"TS 01 AA 1234","HONDA ACTIVA","assets/imgs/motorcycle_32x32.png",2010,"01-01-2010",null,"Y",null);
    let b3 = new Bike(3,"AP 21 MM 2228","PASSION","assets/imgs/motorcycle_32x32.png",2003,"01-01-2003",null,"Y",null);
    let b4 = new Bike(4,"TS 24 GG 2061","HUNK","assets/imgs/motorcycle_32x32.png",2016,"01-01-2016",null,"Y","02-03-2016");
    let b5 = new Bike(5,"AP 01 AB 3433","PASSION PLUS","assets/imgs/motorcycle_32x32.png",2005,"01-01-2005",null,"Y","04-02-2017");
    this.bikes = [b1,b2,b3,b4,b5];
  }
}
