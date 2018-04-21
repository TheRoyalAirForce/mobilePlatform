import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import {Product} from "../../shared/product";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable"
import {UUID} from 'angular2-uuid';
import {LocalStorageProvider} from "../local-storage/local-storage";

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  private subject1 = new Subject();

  constructor(public http: Http,public localStoreService: LocalStorageProvider) {
    console.log('Hello ProductProvider Provider');
  }
  add(input: any): Promise<any> {
    input.id = UUID.UUID();
    return Promise.resolve(this.localStoreService.set("product", JSON.stringify(input)));
  }
  sendCategory(data): void {
    this.subject1.next(data);
  }

  //必须转成Observable
  getCategory(): Observable<any> {
    return this.subject1.asObservable();
  }
}
