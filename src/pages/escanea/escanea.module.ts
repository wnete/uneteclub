import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscaneaPage } from './escanea';

@NgModule({
  declarations: [
    EscaneaPage,
  ],
  imports: [
    IonicPageModule.forChild(EscaneaPage),
  ],
  exports: [
    EscaneaPage
  ]
})
export class EscaneaPageModule {}
