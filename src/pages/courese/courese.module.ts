import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouresePage } from './courese';

@NgModule({
  declarations: [
    CouresePage,
  ],
  imports: [
    IonicPageModule.forChild(CouresePage),
  ],
})
export class CouresePageModule {}
