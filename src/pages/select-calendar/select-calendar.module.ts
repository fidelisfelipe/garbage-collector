import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectCalendarPage } from './select-calendar';

@NgModule({
  declarations: [
    SelectCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectCalendarPage),
  ],
})
export class SelectCalendarPageModule {}
