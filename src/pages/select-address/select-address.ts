import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController} from 'ionic-angular';
import { SelectTypePage } from "../select-type/select-type";

/**
 * Generated class for the SelectAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-address',
  templateUrl: 'select-address.html',
})
export class SelectAddressPage {
  isMyLocation:boolean = false;
  isOutherLocation:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController,
        public modalCtrl: ModalController,
        private toastCtrl: ToastController
      ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAddressPage');
  }
  
  myLocation(){
    this.isMyLocation = true;
    this.isOutherLocation = !this.isMyLocation;
  }
  outherLocation(){
    this.isOutherLocation = true;
    this.isMyLocation = !this.isOutherLocation;
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  next() {
    
    if(this.isValid()){
    
      this.viewCtrl.dismiss();
      let modal = this.modalCtrl.create(SelectTypePage);
      modal.present();
        
    }else{
    
      let toast = this.toastCtrl.create({
        message: 'Address is Required!',
        duration: 3000,
        position: 'middle'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    
    }
  }
  back() {
    this.viewCtrl.dismiss();
  }
  
  isValid():boolean{
    return (this.isMyLocation || this.isOutherLocation);
  }

}
