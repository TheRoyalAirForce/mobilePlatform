import { Component } from '@angular/core';
import {AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import {RegisterPage} from "../register/register";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string = '';//视图模型的属性账号，双向绑定
  password:string = '';//视图模型的属性密码，双向绑定

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:LocalStorageProvider,
              private toastCtrl:ToastController,
              private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    let str = this.username.replace(/(^\s*)|(\s*$)/g, '');
    let appUser=this.storage.get(this.username,{
      phone:'',
      email:'',
      shopName:'',
      password:''
    });
    if(str == '' || str == undefined || str == null){
      let toast = this.toastCtrl.create({
        message:'用户名不能为空',
        duration:3000
      });
      toast.present();
    }
    else if(appUser.phone==''|| appUser.password!=this.password){
      let alert = this.alertCtrl.create({
        title: '提示',
        message:'用户名或者密码不正确',
        buttons:['确定']
      });
      alert.present();
    }
    else{
      this.storage.set('currentuser',this.username);
      console.log(this.username);
      this.navCtrl.push(HomePage);

    }
  }
  //点击忘记密码时调用
  toForgotPassword(){
    //进入找回密码页面
    this.navCtrl.push(ForgotPasswordPage);
  }
  toRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
