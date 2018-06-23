import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {ToastProvider} from "../../providers/toast/toast";

/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  data :any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public reddit:RedditDataProvider,public toastProvider:ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
    this.reddit.getstudentlist('30003').subscribe(
      result => {
        console.log(result);
        if(result.code=='1'){
          this.data=result;
          console.log(this.data);
        }
        else{
          this.toastProvider.show('获取学生信息失败', 'success')
        }
      })
  }

}
