import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

/**
 * Generated class for the EditShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-shop',
  templateUrl: 'edit-shop.html',
})
export class EditShopPage {

  title:string;
  property:string;
  value:string='';//用于ngModel
  shop:any;//用于保存从本地存储中获得店铺数据
  current:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:LocalStorageProvider,
              private toastCtrl:ToastController) {
    this.title=this.navParams.get('title');
    this.property=this.navParams.get('property');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShopPage');
  }

  save(){
    let str = this.value.replace(/(^\s*)|(\s*$)/g, '');
    if(str == '' || str == undefined || str == null){
      let toast = this.toastCtrl.create({
        message:'请输入...',
        duration:3000
      });
      toast.present();
    }
    else {
      this.current = this.storage.get('currentuser', {});
      this.shop = this.storage.get(this.current, {});
      this.shop[this.property] = this.value;
      this.storage.set(this.current, this.shop);
      let toast = this.toastCtrl.create({
        message:'修改成功',
        duration:3000
      });
      toast.present();
    }
  }
}
