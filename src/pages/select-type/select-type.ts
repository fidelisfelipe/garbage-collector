import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { SelectAddressPage } from "../select-address/select-address";
import { SelectCalendarPage } from "../select-calendar/select-calendar";

/**
 * Generated class for the SelectTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-type',
  templateUrl: 'select-type.html',
})
export class SelectTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectTypePage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  back(){
    this.dismiss();
    let modal = this.modalCtrl.create(SelectAddressPage);
    modal.present();
    
  }
  next() {
    this.dismiss();
    let modal = this.modalCtrl.create(SelectCalendarPage);
    modal.present();
  }
}
