import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalStorage} from '../../providers/global-storage/global-storage'
import {RedditData} from '../../providers/reddit-data/reddit-data'
/**
 * Generated class for the NormalPerformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-normal-perform',
  templateUrl: 'normal-perform.html',
})
export class NormalPerformPage {

  qscores: any;

  constructor(public questionData: RedditData, public globalStorage: GlobalStorage) {
  //   this.qscores = [];
  //   globalStorage.getStorage('stuId').then(res => {
  //     questionData.getQuestion('电子技术', res).subscribe(result => {
  //       this.qscores = result.questions;
  //       // console.log('normal page ' + result.questions[0].score);
  //     })
  //   });
  }

}
