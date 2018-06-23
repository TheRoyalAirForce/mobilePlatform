import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {LocalStorageProvider} from "../local-storage/local-storage";
import {PRODUCTS} from "../../shared/mock.products";
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from "../../shared/product";
import {UUID} from 'angular2-uuid';
const PAGE_SIZE = 8;
/*
  Generated class for the CommodityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommodityProvider {
  products;
  private subject1 = new Subject();

  constructor(public local: LocalStorageProvider) {
    this.products = this.local.get("products", PRODUCTS);
    console.log('Hello CommodityProvider Provider');
  }

  get(index: number): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!index) {
        reject('参数不能为空');
      }
      setTimeout(()=>{
        let products = this.local.get("products", PRODUCTS);
        let result = products.slice((index - 1) * PAGE_SIZE, index * PAGE_SIZE);
        resolve(result);
      },500);
    });
  }

  getByName(name: string): Promise<any> {
    console.log('name=',name);
    return new Promise((resolve, reject) => {
      console.log(this.products);
      let result = this.products.filter((item,i)=>{
        console.log(item,i);
        return item.name.indexOf(name)!==-1;
      });
      console.log(result);
      resolve(result);
    });
  }

  getByCategoryId(categoryId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let result = this.products.filter((item)=>{
        return item.categoryId == categoryId;
      })
      resolve(result);
    });
  }

  add(input: Product) {
    this.products = this.local.get("products", PRODUCTS);
     input.id = UUID.UUID();
    this.products.push(input);
    this.local.set("products",this.products);
  }
}
export class Error{
  message:string;
  detail:string;
}
export class Result{
  url:string;
  data:any;
  success:boolean;
  error:Error;
}


