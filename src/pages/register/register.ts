import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthenticationCodeProvider} from "../../providers/authentication-code/authentication-code";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {WelcomePage} from "../welcome/welcome";

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

  textSend = '发送验证码';
  isSend = false;
  clock;

  register = {
    phone:'',
    email:'',
    shopName:'',
    password:'',
    confirmPassword:'',
    code:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private authenticationCodeService:AuthenticationCodeProvider, private storage:LocalStorageProvider,
              private toastCtrl: ToastController) {
  }

  @ViewChild('registerSlides') registerSlides:any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.registerSlides.lockSwipes(true);
  }
  next(){
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slideNext();
    this.registerSlides.lockSwipes(true);
  }
  previous() {
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slidePrev();
    this.registerSlides.lockSwipes(true);
  }
  validatePhone(){
    let appUser=this.storage.get(this.register.phone,{
      phone:'',
      email:'',
      shopName:'',
      password:''
    });
    if(appUser.phone==''){
      this.next();
    }
    else{
      let toast = this.toastCtrl.create({
        message: '该手机号已注册过',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }
  send(){
    let count = 60;
    this.isSend = true;
    this.clock =setInterval(()=>{
      if(count>0){
        this.textSend=count+'秒后重新获取';
      }
      else {
        this.textSend="发送验证码";
        this.isSend = false;
        clearInterval(this.clock);
      }
      count--;
    },1000);
    console.log(this.authenticationCodeService.createCode(4));
    //没有使用短信云服务发送验证码，先在控制台输出生成的验证码
  }
  validateCode(){
    if(this.authenticationCodeService.validate(this.register.code)){
      this.next();
      this.textSend="发送验证码";
      this.isSend = false;
      clearInterval(this.clock);
    }
    else{
      console.log('短信验证码不正确或者已过期');
      let toast = this.toastCtrl.create({
        message: '短信验证码不正确或者已过期',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }
  sign(){
    let appUser:any = {
      phone:this.register.phone,
      email:this.register.email,
      shopName:this.register.shopName,
      password:this.register.password,
    };
    this.storage.set(this.register.phone,appUser);
    this.storage.set(this.register.email,appUser);
    this.next();
  }
  toWelcome(){
    this.navCtrl.push(WelcomePage);
  }
}

