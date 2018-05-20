import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditPasswordPage} from "../edit-password/edit-password";
import {LogInPage} from "../log-in/log-in";
import {AboutusPage} from "../aboutus/aboutus";

"../aboutus/aboutus";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  loginPage:any;
  editPasswordPage :any = EditPasswordPage;
  aboutusPage :any=AboutusPage;
  APP;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage:LocalStorageProvider) {
    this.loginPage = LogInPage;
    this.APP = this.storage.get('APP',{});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  logout(){
    this.storage.remove("UserSession");
    this.navCtrl.push(LogInPage)
  }

}
