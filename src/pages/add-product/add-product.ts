import { Component } from '@angular/core';
import {AlertController, Events, NavController, NavParams, ToastController} from 'ionic-angular';
import {CategoryListPage} from "../category-list/category-list";
import {Product} from "../../shared/product";
import {CategoryProvider} from "../../providers/category/category";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {ProductProvider} from "../../providers/product/product";
import {HomePage} from "../home/home";

/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  categoryListPage=CategoryListPage;
  product:Product;
  code:any;
  name:any='';
  phone:any='';
  price:any='';
  purchase:any;
  stock:any;
  norm:any;
  remark:any;
  supplier:any;
  subscription: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private categoryService: CategoryProvider,
              private events:Events,private alertCtrl:AlertController,private storage:LocalStorageProvider,
              private productService:ProductProvider,private toastCtrl:ToastController) {
    this.product=new Product();
    this.product.categoryName=this.categoryService.activeCategory.name;
    this.product.categoryId=this.categoryService.activeCategory.id;
    this.events.subscribe('category:update',(data)=>{
      console.log('events:',data);
      this.product.categoryName=data.name;
      this.product.categoryId=data.id;
    });
  }

  ionViewWillUnload(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }


  }


  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '新增供货商',
      inputs: [
        {
          name: 'name',
          value: this.name,
          placeholder: '供应商名称'
        },
        {
          name: 'phone',
          value: this.phone,
          placeholder: '供应商电话'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            this.name=data.name;
            this.phone=data.phone;
            console.log(data);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

  save(){
    var message = "";
    let str1 = this.name.replace(/(^\s*)|(\s*$)/g, '');
    let str2 = this.phone.replace(/(^\s*)|(\s*$)/g, '');
    let str3=this.price.replace(/(^\s*)|(\s*$)/g, '');

    if (str1 == '' || str1 == undefined || str1 == null) {
      message =  '请输入供应商名称';
    }
    if(str2 == '' || str2 == undefined || str2 == null){
      message = '请输入供应商电话';
    }
    if(str3 == '' || str3 == undefined || str3 == null){
      message =  '请输入售价';
    }
    if(message!="") {
      this.showAt(message);
      return;
    }

    let p = new Product();
    this.productService.add(p);
    p.name = this.name;
    p.categoryId = this.product.categoryId;
    p.categoryName = this.product.categoryName;
    p.barcode = this.code;
    p.images = [];
    p.price = this.price
    this.storage.set(p.id, p);
    message = "添加成功";
    this.showAt(message);
    this.navCtrl.push(HomePage);

  }

  add(){
    this.product.categoryName='默认类别';
    this.product.categoryId=5;
    this.code='';
    this.name='';
    this.phone='';
    this.price='';
    this.purchase='';
    this.stock='';
    this.norm='';
    this.remark='';
    this.supplier='';
  }

  showAt(mes:string){
    let toast = this.toastCtrl.create({
      message: mes,
      duration: 3000
    });
    toast.present();
  }
}
