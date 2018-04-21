import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {CopyrightComponent} from "../components/copyright/copyright";
import { AuthenticationCodeProvider } from '../providers/authentication-code/authentication-code';
import { SettingPage } from '../pages/setting/setting';
import {EditShopPage} from "../pages/edit-shop/edit-shop";
import {ShopPage} from "../pages/shop/shop";
import {CategoryListPage} from "../pages/category-list/category-list";
import { CategoryProvider } from '../providers/category/category';
import {EditCategoryPage} from "../pages/edit-category/edit-category";
import {EditCategoryNamePage} from "../pages/edit-category-name/edit-category-name";
import {CategoryEditListPage} from "../pages/category-edit-list/category-edit-list";
import { ProductProvider } from '../providers/product/product';
import { ToastProvider } from '../providers/toast/toast';
import { AddProductPage} from "../pages/add-product/add-product";
import {CommodityProvider} from "../providers/commodity/commodity";
import {HttpModule} from '@angular/http';
import {EditPasswordPage} from "../pages/edit-password/edit-password";
import {MenuPage} from "../pages/menu/menu";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    LoginPage,
    ForgotPasswordPage,
    CopyrightComponent,
    SettingPage,
    EditShopPage,
    ShopPage,
    CategoryListPage,
    EditCategoryPage,
    EditCategoryNamePage,
    CategoryEditListPage,
    AddProductPage,
    EditPasswordPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回', // 配置返回按钮的文字
      backButtonIcon: 'arrow-dropleft-circle' // 配置返回按钮的图标
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    LoginPage,
    ForgotPasswordPage,
    CopyrightComponent,
    SettingPage,
    EditShopPage,
    ShopPage,
    CategoryListPage,
    EditCategoryPage,
    EditCategoryNamePage,
    CategoryEditListPage,
    AddProductPage,
    EditPasswordPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider,
    AuthenticationCodeProvider,
    CategoryProvider,
    ProductProvider,
    ToastProvider,
    CommodityProvider
  ]
})
export class AppModule {}
