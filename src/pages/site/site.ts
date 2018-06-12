import {Component} from '@angular/core';

import {LoadingController, ToastController} from 'ionic-angular';
import {GlobalStorage} from '../../providers/global-storage/global-storage'
import {RedditData} from '../../providers/reddit-data/reddit-data'
import {ToastProvider} from "../../providers/toast/toast";

@Component({
  selector: 'page-site',
  templateUrl: 'site.html'
})

export class SitePage {

  c: any;
  site: string[];
  row: any;
  col: any;
  rows: number[];
  cols: number[];
  qiandaodata:any[];
  pai: string;
  lie: string;
  isPass = '0';
  // public time = '2017-05-10';

  constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController,public toastProvider:ToastProvider,public reddit:RedditData) {
  }
  sign1() {
    this.reddit.getqiandao('30003','170327025',this.row,this.col).subscribe(
      result => {
        this.isPass='1';
        if(result.code==1){
          this.toastProvider.show('签到成功', 'success');
        }
        else{
          this.toastProvider.show('该课程没有该学生ID，或者该座位已经被签到', 'fail');
        }
      })
    if(this.isPass !='1'){
      this.isPass='0';
      this.toastProvider.show('该课程还未开始签到', 'fail');
    }
  }
  sign2() {
    this.reddit.getqiandao('30003','170327024',this.row,this.col).subscribe(
      result => {
        this.isPass='1';
        if(result.code==1){
          this.toastProvider.show('签到成功', 'success');
        }
        else{
          this.toastProvider.show('该课程没有该学生ID，或者该座位已经被签到', 'fail');
        }
      })
    if(this.isPass !='1'){
      this.isPass='0';
      this.toastProvider.show('该课程还未开始签到', 'fail');
    }
  }
  sign() {


  }
}
