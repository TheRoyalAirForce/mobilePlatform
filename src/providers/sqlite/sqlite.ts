// import {Injectable} from '@angular/core';
// import 'rxjs/add/operator/map';
// import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
// import {User} from "../../shared/user";
//
// /*
//   Generated class for the SqliteProvider provider.
//
//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class SqliteProvider {
//   createSql: string = 'CREATE TABLE IF NOT EXISTS USER (ID INTEGER PRIMARY KEY AUTOINCREMENT,phone TEXT,email TEXT,password,TEXT,shopname TEXT)'
//   querySql: string = '';
//   database: any;
//
//   constructor(private sqlite: SQLite) {
//   }
//
//   createUserTable() {
//     this.sqlite = new SQLite();
//     this.sqlite.create({
//       name: 'app.db',
//       location: 'default'
//     }).then((db: SQLiteObject) => {
//
//       db.executeSql(this.createSql, {})
//         .then(() => console.log("表创建成功"))
//         .catch(e => console.log(e));
//       this.database = db;
//     }).catch(e => console.log(e));
//   }
//
//   insertUser(user: User) {
//     let insertsql = "INSERT INTO USER (phone, email,password,shopname) VALUES (?, ?, ?, ?);";
//     this.database.executeSql(insertsql, [user.phone, user.email, user.password, user.shopname])
//       .then(() => console.log("插入成功"))
//       .catch(e => console.log(e));
//
//   }
//
//   queryUser(phone: string) {
//     this.database.executeSql("SELECT * FROM USER WHERE phone=" + phone, {})
//       .then((data) => data.rows.item(0))
//       .catch(e => console.log(e))
//   };
// }
