
import { Component } from '@angular/core';
//import { Nav, Platform } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {HomePage} from "../home/home";
import{ListPage} from "../list/list";
//import{WelcomePage} from "../welcome/welcome";
import{SettingPage} from "../setting/setting";
//import {LoginPage} from "../login/login";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
 // @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any, icon: string}>;
  username:any;
  appuser={
    phone:'',
    email:'',
    shopName:'',
    password:'',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:LocalStorageProvider,) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  ionViewWillEnter(){
    this.username=this.storage.get('currentuser',{});
    //   console.log(this.username);
    this.appuser=this.storage.get(this.username,{
      phone:'',
      email:'',
      shopName:'',
      password:'',
    })
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '开店论坛', component: HomePage, icon: 'chatboxes' },
      { title: '手机橱窗', component: ListPage, icon: 'create' },
      { title: '邀请有礼', component: ListPage, icon: 'git-merge' },
      { title: '资金账户', component: ListPage, icon: 'cash' },
    ];
    console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }
  toSettingPage(){
    this.navCtrl.push(SettingPage);
    //this.nav.setRoot(SettingPage);
  }
}
