import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ViewController, PopoverOptions } from 'ionic-angular';

/**
 * Generated class for the EstimateCostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-estimate-cost',
  templateUrl: 'estimate-cost.html',
})
export class EstimateCostPage {
  opt: PopoverOptions;
  estimatedCost: number;
  defaultCost: number;
  sType: number;
  optionValue: number;
  premiumCost: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController,public viewCtrl: ViewController) {
    this.opt = { cssClass: "cost-est-popover" };
    this.defaultCost = 200.00;
    this.sType = 100.00;
    this.premiumCost = 100.00;

    this.estimatedCost = this.defaultCost + this.sType+ this.premiumCost;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimateCostPage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, {}, this.opt);
    popover.present({
      ev: myEvent
    });
  }
  calculate(val: number) {
    this.optionValue = val;
    switch (val) {
      case 100: {
        this.sType = 100;
        this.estimatedCost = this.defaultCost + this.sType+ this.premiumCost;
      }
        break;
      case 150: {
        this.sType = 200;

        this.estimatedCost = this.defaultCost + this.sType + this.premiumCost;
      }
        break;
      case 200: {
        this.sType = 400;

        this.estimatedCost = this.defaultCost + this.sType + this.premiumCost;
      }
        break;


      default:
        break;
    }
  }
  cal(val: any) {
    switch (val) {
      case 'p': {
        this.premiumCost = 200.00;
        this.calculate(this.optionValue);
      }

        break;
      case 'e': {
        this.premiumCost = 100.00;
        this.calculate(this.optionValue);
      }

        break;
      default:
        break;
    }
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

}


@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) { }

  close() {
    this.viewCtrl.dismiss();
  }
}
