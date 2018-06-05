import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SitePage} from "../site/site";
import {LeavePage} from "../leave/leave";

/**
 * Generated class for the PositionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-position',
  templateUrl: 'position.html',
})
export class PositionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PositionPage');
  }
  choseSiteSign(){
    this.navCtrl.push(SitePage);
  }
  leave(){
    this.navCtrl.push(LeavePage);
  }

}
