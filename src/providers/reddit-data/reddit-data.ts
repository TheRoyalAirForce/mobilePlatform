import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the RedditData provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class RedditData {
  //'http://dju46q.natappfree.cc/attendentServer/login/doLogin?username=13233333334&password=123456
  hurl = 'http://www.fzdxlzy.cn/attendentServer';
  // hurl = 'http://222.76.59.23:8080';

  constructor(public http: Http) {
    console.log('Hello SignInData Provider');
  }

  getJsonData() {
    let url = this.hurl + '/personnelaction/getAllPersonnelHql';
    return this.http.get(url).map(res => res.json());
  }

  postLogin(id, password) {
    let url = this.hurl + '/login/doLogin?username=' + id + '&password=' + password;
    return this.http.get(url).map(res => res.json());
  }

  getqiandao(id,studentId,row,col) {
    let url = this.hurl + '/course/studentSignIn?courseId=' + id +'&studentId=' + studentId+'&row=' + row+'&col=' + col;
    return this.http.get(url).map(res => res.json());
  }

  getLeaverecord(id) {
    let url = this.hurl + '/course/getStudentLeaveList?studentId=' + id;
    return this.http.get(url).map(res => res.json());
  }

  getAbsendrecord(id) {
    let url = this.hurl + '/course/getStudentAbsentList?studentId=' + id;
    return this.http.get(url).map(res => res.json());
  }

  createCallTheRoll(cn, cs, cd, id, cp) {
    let url = this.hurl + '/shhTest/calltherollaction/createCallTheRoll?coursename=' + cn + '&callstate=' + cs
      + '&calldate=' + cd + '&id=' + id + '&callposition=' + cp;
    console.log(url);
    return this.http.get(url).map(res => res.json());
  }

  getCallTheRollByID(id) {
    let url = this.hurl + '/shhTest/calltherollaction/getCallTheRollByIDHql?id=' + id;
    return this.http.get(url).map(res => res.json());
  }

  countCallTheRoll(id, cs, cn) {
    let url = this.hurl + '/shhTest/calltherollaction/countCallTheRoll?id=' + id + '&callstate=' + cs +
      '&coursename=' + cn;
    return this.http.get(url).map(res => res.json());
  }

  getQuestion(cn, id) {
    let url = this.hurl + '/shhTest/questionaction/getQuestionByCoursenameAndID?courseName=' + cn + '&id=' + id;
    return this.http.get(url).map(res => res.json());
  }

  updateCallTheRoll(id, cp, cn, cs) {
    let url = this.hurl + '/shhTest/calltherollaction/updateCallTheRoll?calldate=1' + '&id=' + id + '&callposition=' + cp
      + '&coursename=' + cn + '&callstate=' + cs + '&autoid=0';
    console.log(url);
    return this.http.get(url).map(res => res.json());
  }

  // getCourseByName(cn) {
  //   let url = this.hurl + '/shhTest/courseaction/getCourseByName?coursename=' + cn;
  //   return this.http.get(url).map(res => res.json());
  // }
}
