import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {ToastProvider} from "../../providers/toast/toast";

/**
 * Generated class for the QiandaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qiandao',
  templateUrl: 'qiandao.html',
})
export class QiandaoPage {
  score:any;
  testRadioOpen: boolean;
  testRadioResult;
  due:boolean;
  due2:boolean;
  judge1:boolean;
  judge2:boolean;
  coursename: string;
  id:any;
  bcalldate:any;
  acalldate:any;
  ccalldate:any;
  result:any;
  result2:any;
  callposition:any;
  call1=[];
  call2=[];
  pname=[];
  hang:any;
  lie:any;
  position:any;
  hangT=[];
  lieT=[];
  final:any;
  now = new Date();
  items: Array<{studentId: string, col: string, flag: string,isLeave: string, signTime: string, row: string,isAbsent: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public reddit:RedditDataProvider,public toastProvider:ToastProvider) {
    this.items = [];
    this.reddit.getstudentname('30003').subscribe(
      result => {
        this.result2=result.data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QiandaoPage');
  }
  find(){
    this.reddit.getstudentname('30003').subscribe(
      result => {
        this.result2=result.data;
      })
  }
  start() {
    this.reddit.getstartcourse('30003').subscribe(
      result => {
        if(result.isOk==true)
        {
          this.toastProvider.show('开始课程成功', 'success')
        }
        else{
          console.log(result.isOk)
          this.toastProvider.show('开始课程失败，课程已经开始，更多疑问请联系管理员', 'fail')
        }
      })
  }
}
