// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
//
// /**
//  * Generated class for the LogInPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */
//
// @IonicPage()
// @Component({
//   selector: 'page-log-in',
//   templateUrl: 'log-in.html',
// })
// export class LogInPage {
//
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }
//
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LogInPage');
//   }
//
// }
import { Component , ViewChild} from '@angular/core';
import { NavController, NavParams , ToastController} from 'ionic-angular';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {HomePage} from "../home/home";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import {RegisterPage} from "../register/register";
import {RedditData} from "../../providers/reddit-data/reddit-data";
import {ToastProvider} from "../../providers/toast/toast";

/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  @ViewChild('loginForm') loginForm:any;
  flag='';
  login = {
    phone:'',
    password:''
  };
  username:string = '';//视图模型的属性账号，双向绑定
  password:string = '';//视图模型的属性密码，双向绑定
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:LocalStorageProvider,
              private toastCtrl:ToastController,public reddit:RedditData,public toastProvider:ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
  login2(){

  }
  Login(){

    this.reddit.postLogin(this.login.phone, this.login.password).subscribe(
      result => {
        this.flag='1';
        console.log(result.isOk);
        if(result.isOk==true){
          this.navCtrl.push(HomePage);
        }
        else{
          this.toastProvider.show('登入失败', 'success')
        }
      })
     if(this.flag!='1'){
       this.toastProvider.show('账户密码错误', 'success')
     }
  }
  quanxian()
  {

  }
  quanxian2()
  {

  }
  toForgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }
  toRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
