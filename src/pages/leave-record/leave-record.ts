import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditData} from "../../providers/reddit-data/reddit-data";

/**
 * Generated class for the LeaveRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-record',
  templateUrl: 'leave-record.html',
})
export class LeaveRecordPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public reddit:RedditData){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveRecordPage');
    this.reddit.getLeaverecord('170327026').subscribe(
      result => {
        this.data =result.data;
        console.log(this.data);
      })
  }

}
