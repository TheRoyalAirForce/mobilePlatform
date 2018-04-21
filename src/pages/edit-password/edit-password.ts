import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {SettingPage} from "../setting/setting";

/**
 * Generated class for the EditPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-password',
  templateUrl: 'edit-password.html',
})
export class EditPasswordPage {
  phone:any;
  npassword:any;
  opassword:any;
  qpassword:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:LocalStorageProvider,private toastCtrl:ToastController) {
    this.phone=this.storage.get('currentuser',{});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPasswordPage');
  }
  toeditpasw(){
    let appUser=this.storage.get(this.phone,{
      phone:'',
      email:'',
      shopName:'',
      password:''
    });
    if(this.opassword=='') {
      let toast = this.toastCtrl.create({
        message: '旧密码不能为空',
        duration: 3000
      });
      toast.present();
    }
    else if(this.npassword=='') {
      let toast = this.toastCtrl.create({
        message: '新密码不能为空',
        duration: 3000
      });
      toast.present();
    }
    else if(this.qpassword=='') {
      let toast = this.toastCtrl.create({
        message: '确认密码不能为空',
        duration: 3000
      });
      toast.present();
    }
    else if(this.opassword!=appUser.password) {
      let toast = this.toastCtrl.create({
        message: '密码错误',
        duration: 3000
      });
      toast.present();
    }
    else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){6,16}$/.test(this.npassword)) {
      let toast = this.toastCtrl.create({
        message: '新密码格式不正确',
        duration: 3000
      });
      toast.present();
    }
    else if(this.npassword!=this.qpassword) {
      let toast = this.toastCtrl.create({
        message: '确认密码不符合',
        duration: 3000
      });
      toast.present();
    }
    else {
      appUser.password=this.npassword;
      this.storage.set(this.phone,appUser);
      let toast = this.toastCtrl.create({
        message: '修改成功',
        duration: 3000
      });
      toast.present();
    }
       this.navCtrl.push(SettingPage);
  }

}
