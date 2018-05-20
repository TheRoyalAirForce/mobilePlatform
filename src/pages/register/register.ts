import {Component, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthenticationCodeProvider} from "../../providers/authentication-code/authentication-code";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {ToastController} from "ionic-angular";
import {LogInPage} from "../log-in/log-in";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('registerSlides')registerSlides:any;
  register = {
    phone:'',
    email:'',
    shopName:'',
    password:'',
    confirmPassword:'',
    code:''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:LocalStorageProvider, private toastCtrl:ToastController, private authenticationCodeService:AuthenticationCodeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.registerSlides.lockSwipeToNext(true);
    this.registerSlides.lockSwipeToPrev(true);
  }
  next(){
    this.registerSlides.lockSwipeToNext(false);
    this.registerSlides.slideNext();
    this.registerSlides.lockSwipeToNext(true);
  }
  previous(){
    this.registerSlides.lockSwipeToPrev(false);
    this.registerSlides.slidePrev();
    this.registerSlides.lockSwipeToPrev(true);
  }
  send(){
    console.log(this.authenticationCodeService.createCode(4));
    //没有使用短信云服务发送验证码，先在控制台输出生成的验证码
  }
  validateCode(){
    if(this.authenticationCodeService.validate(this.register.code)){
      this.next();
    }
    else {
      //   let toast = this.toastCtrl.create({
      //     message:'短信验证码不正确或者已过期',
      //     duration:3000
      //   });
      //   toast.present();
      // }
      this.next();
    }
  }
  saveUserInfo(){
    let userConfig = {
      phone:this.register.phone,
      email:this.register.email,
      shopName:this.register.shopName,
      password:this.register.password,
      flag:true
    }

    let userlist:any = this.storage.get('userlist',null);
    if(null == userlist){
      var arrayObj = new Array();
      arrayObj.push(userConfig);
      this.storage.set('userlist',arrayObj);
    }else{
      userlist.push(userConfig);
      this.storage.set('userlist',userlist);
    }
    this.navCtrl.push(LogInPage);
  }
}
