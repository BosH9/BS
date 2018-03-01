import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { AddBikeDetailsPage } from '../add-bike-details/add-bike-details';
import { ChooseYourBikePage } from '../choose-your-bike/choose-your-bike';
import { MyBikesPage } from '../my-bikes/my-bikes';
import { Bike } from '../../modals/bike';
import { BookPage } from '../book/book';
import { DataProvider } from '../../providers/data/data';

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
  bikes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public viewCtrl: ViewController, public modalCtrl: ModalController,
      public dataProvider: DataProvider) {
      //this.getMyBikes();
      dataProvider.getBikes('1').subscribe(data=>{
        console.log(data);
        this.bikes=data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectBikePage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  addBike(){
    this.navCtrl.push(AddBikeDetailsPage);

    // let modal = this.modalCtrl.create(AddBikeDetailsPage);
    // modal.onDidDismiss(data=>{
    //   console.log(data);
    // });
    // modal.present();
    // this.dismiss();
    //this.viewCtrl.dismiss("2");
  }
  selectYourBike(){
    // let xdata:any;
    // let modal = this.modalCtrl.create(ChooseYourBikePage);
    // modal.onDidDismiss(data=>{
    //   //console.log(data);
    //   xdata=data;
    // });
    // modal.present();
    //this.viewCtrl.dismiss("1");
    this.navCtrl.push(ChooseYourBikePage);
    
  }
  getMyBikes(){
    
    let b1 = new Bike(1,"AP 24 L 2068","PASSION PLUS","assets/imgs/motorcycle_32x32.png",2005,"01-01-2005",null,"Y","02-01-2017");
    let b2 = new Bike(2,"TS 01 AA 1234","HONDA ACTIVA","assets/imgs/motorcycle_32x32.png",2010,"01-01-2010",null,"Y",null);
    let b3 = new Bike(3,"AP 21 MM 2228","PASSION","assets/imgs/motorcycle_32x32.png",2003,"01-01-2003",null,"Y",null);
    let b4 = new Bike(4,"TS 24 GG 2061","HUNK","assets/imgs/motorcycle_32x32.png",2016,"01-01-2016",null,"Y","02-03-2016");
    let b5 = new Bike(5,"AP 01 AB 3433","PASSION PLUS","assets/imgs/motorcycle_32x32.png",2005,"01-01-2005",null,"Y","04-02-2017");
    this.bikes = [b1,b2,b3,b4,b5];

    
  }
  select(bike:Bike){
    let data = { 'id':bike.id,'registrationModel': bike.registrationModel,'model' : bike.model,image : bike.image };
    this.navCtrl.popTo(BookPage);
  }
}
