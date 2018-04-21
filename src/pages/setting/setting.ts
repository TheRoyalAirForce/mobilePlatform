import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {ShopPage} from "../shop/shop";
import {EditPasswordPage} from "../edit-password/edit-password";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  //@ViewChild(Nav) nav: Nav;
  //signinPage:any;
  shoppage:any;
  epassword:any;
  //phone:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:LocalStorageProvider,) {
    //this.signinPage = SignPage;
    this.shoppage=ShopPage;
    this.epassword=EditPasswordPage;

    //console.log(this.phone);
  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad SettingPage');

  }
  Sexit(){
    this.storage.remove('currentuser');
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }

}
