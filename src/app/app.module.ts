import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from "../pages/welcome/welcome";
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { RegisterPage } from "../pages/register/register";
import {FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";
import { AuthenticationCodeProvider } from '../providers/authentication-code/authentication-code';
import {CopyrightComponent} from "../components/copyright/copyright";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {LogInPage} from "../pages/log-in/log-in";
import {SettingPage} from "../pages/setting/setting";
import {EditPasswordPage} from "../pages/edit-password/edit-password";
import { ToastProvider } from '../providers/toast/toast';
import {AboutusPage} from "../pages/aboutus/aboutus";
import {PhotoLibrary} from "@ionic-native/photo-library";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {Camera} from "@ionic-native/camera";
import {ImagePicker} from "@ionic-native/image-picker";
import {KaoqinPage} from "../pages/kaoqin/kaoqin";
import { GlobalStorage } from '../providers/global-storage/global-storage';
import { RedditData } from '../providers/reddit-data/reddit-data';
import {NormalPerformPage} from "../pages/normal-perform/normal-perform";
import {PositionPage} from "../pages/position/position";
import {PerformPage} from "../pages/perform/perform";
import {LeaveRecordPage} from "../pages/leave-record/leave-record";
import {AbsentRecordPage} from "../pages/absent-record/absent-record";
import {SitePage} from "../pages/site/site";
import {LeavePage} from "../pages/leave/leave";
// import { BaiduMapModule } from 'angular2-baidu-map';
// import {MapPage} from "../pages/map/map";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    CopyrightComponent,
    LogInPage,
    ForgotPasswordPage,
    SettingPage,
    EditPasswordPage,
    AboutusPage,
    KaoqinPage,
    NormalPerformPage,
    PositionPage,
    PerformPage,
    LeaveRecordPage,
    AbsentRecordPage,
    SitePage,
    LeavePage,
    // MapPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
    backButtonText: '返回'
    }),
    FormsModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    LogInPage,
    ForgotPasswordPage,
    SettingPage,
    EditPasswordPage,
    AboutusPage,
    KaoqinPage,
    NormalPerformPage,
    PositionPage,
    PerformPage,
    LeaveRecordPage,
    AbsentRecordPage,
    SitePage,
    LeavePage,
    // MapPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider,
    AuthenticationCodeProvider,
    ToastProvider,
    PhotoLibrary,
    BarcodeScanner,
    Camera,
    ImagePicker,
    GlobalStorage,
    RedditData,
  ]
})
export class AppModule {}
