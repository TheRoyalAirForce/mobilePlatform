import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ToastController} from "ionic-angular";

/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {

  constructor(/*public http: Http*/public toastCtrl: ToastController,) {
    console.log('Hello ToastProvider Provider');
  }
  show(message,type) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      cssClass: 'my-toast my-toast-'+type
    });

    toast.present();
  }
  createToast(message, duration) {
    this.toastCtrl.create({
      message: message,
      duration: duration
    }).present();
}
}
