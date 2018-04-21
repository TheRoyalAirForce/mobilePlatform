import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthenticationCodeProvider} from "../../providers/authentication-code/authentication-code";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {LoginPage} from "../login/login";

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  username:string = '';
  password:string = '';
  code: '';
  textSend = '发送验证码';
  isSend = false;
  clock;


  constructor(public navCtrl: NavController, public navParams: NavParams,private authenticationCodeService:AuthenticationCodeProvider,
              private toastCtrl:ToastController, private storage:LocalStorageProvider) {
  }
  @ViewChild('findSlides') findSlides:any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
    this.findSlides.lockSwipes(true);
  }
  next(){
    this.findSlides.lockSwipes(false);
    this.findSlides.slideNext();
    this.findSlides.lockSwipes(true);
  }
  submit(){
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
    else if(appUser.phone==''){
      let toast = this.toastCtrl.create({
        message:'该用户未注册',
        duration:3000
      });
      toast.present();
    }
    else{
      this.next();
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
    if(this.authenticationCodeService.validate(this.code)){
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
  reset(){
    let appUser=this.storage.get(this.username,{
      phone:'',
      email:'',
      shopName:'',
      password:''
    });
    appUser.password=this.password;
    this.storage.set(appUser.phone,appUser);
    this.storage.set(appUser.email,appUser);
    this.next();
  }
  toLogin(){
    this.navCtrl.push(LoginPage);
  }
}
