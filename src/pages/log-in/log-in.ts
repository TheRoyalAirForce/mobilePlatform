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
  login = {
    phone:'',
    password:''
  };
  username:string = '';//视图模型的属性账号，双向绑定
  password:string = '';//视图模型的属性密码，双向绑定
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:LocalStorageProvider,
              private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }
  Login(){
    let msg = '帐号或密码错误';
    let flag = false;
    let userlist:any = this.storage.get('userlist',null);
    if(null != userlist){
      for(var i=0;i<userlist.length;i++){
        if(this.login.phone==userlist[i].phone && this.login.password==userlist[i].password){
          flag = true;
        }
      }
      if(flag){
        msg = "登录成功";
      }
    }
    let userSession = {
      phone:this.login.phone,
    }
    this.storage.set("UserSession",userSession);

    let toast = this.toastCtrl.create({
      message:msg,
      duration:3000
    });
    toast.present();
    if(msg == "登录成功"){
      this.navCtrl.push(HomePage);
    }
    //
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
