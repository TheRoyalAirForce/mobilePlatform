import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ToastProvider} from "../../providers/toast/toast";
import {RedditData} from "../../providers/reddit-data/reddit-data";
/**
 * Generated class for the AbsentRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absent-record',
  templateUrl: 'absent-record.html',
})
export class AbsentRecordPage {
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public reddit:RedditData,public toastProvider:ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsentRecordPage');
    this.reddit.getAbsendrecord('170327035').subscribe(
      result => {
        this.data=result.data;
      })
  }

  find(){

  }
}
