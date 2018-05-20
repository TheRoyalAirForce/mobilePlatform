import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveRecordPage } from './leave-record';

@NgModule({
  declarations: [
    LeaveRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveRecordPage),
  ],
})
export class LeaveRecordPageModule {}
