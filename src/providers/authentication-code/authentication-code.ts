import { Injectable } from '@angular/core';
//import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Md5} from "ts-md5/dist/md5";

/*
  Generated class for the AuthenticationCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthenticationCodeProvider {

  //用于保存验证码
  private code:string;
  private mcode:string;
  //存放验证码的过期时间
  private deadline:number;
  constructor(/*private http: Http*/) {


  }
  //生成指定长度的随机数字
  createCode(count:number):string{
    this.code = '';
    this.mcode= '';
    this.deadline = Date.now() + 60 * 10 * 1000;
    for(let i = 0; i < count; i++){
      let num =Math.floor(Math.random() * 10);
      this.code += num.toString();
    }
    this.mcode = Md5.hashStr(this.code).toString();
    return this.code;
  }
  //验证用户输入的短信验证码是否一致，是否过期
  validate(value:string){
    let now = Date.now();
    return Md5.hashStr(value).toString()==this.mcode && now < this.deadline;
  }

}
