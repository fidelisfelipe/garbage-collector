import { Component } from '@angular/core';
import { SelectAddressPage } from "../select-address/select-address";
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  selectAddress(){
    let modal = this.modalCtrl.create(SelectAddressPage);
      modal.present();
  }
}
