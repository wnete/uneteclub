import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuentraPage } from './encuentra';

@NgModule({
  declarations: [
    EncuentraPage,
  ],
  imports: [
    IonicPageModule.forChild(EncuentraPage),
  ],
  exports: [
    EncuentraPage
  ]
})
export class EncuentraPageModule {}
