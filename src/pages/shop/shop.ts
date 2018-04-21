import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EditShopPage} from "../edit-shop/edit-shop";

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  editshop:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.editshop=EditShopPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

}
