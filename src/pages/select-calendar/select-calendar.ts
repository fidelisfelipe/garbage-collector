import { SelectTypePage } from "../select-type/select-type";
import { Component } from '@angular/core';
import { IonicPage, ModalController, Platform, NavParams, ViewController, NavController, ToastController } from 'ionic-angular';

/**
 * Generated class for the SelectCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-calendar',
  templateUrl: 'select-calendar.html',
})
export class SelectCalendarPage {
  dateSelected:Date;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private toastCtrl: ToastController
) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCalendarPage');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  next() {
    this.viewCtrl.dismiss();
    let toast = this.toastCtrl.create({
      message: 'Resquest Collector Sended of Success !',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  back() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(SelectTypePage);
    modal.present();
  }

}
