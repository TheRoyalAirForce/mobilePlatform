import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NormalPerformPage } from './normal-perform';

@NgModule({
  declarations: [
    NormalPerformPage,
  ],
  imports: [
    IonicPageModule.forChild(NormalPerformPage),
  ],
})
export class NormalPerformPageModule {}
