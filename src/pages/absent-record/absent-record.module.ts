import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbsentRecordPage } from './absent-record';

@NgModule({
  declarations: [
    AbsentRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(AbsentRecordPage),
  ],
})
export class AbsentRecordPageModule {}
