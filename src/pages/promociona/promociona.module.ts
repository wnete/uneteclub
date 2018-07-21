import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromocionaPage } from './promociona';

@NgModule({
  declarations: [
    PromocionaPage,
  ],
  imports: [
    IonicPageModule.forChild(PromocionaPage),
  ],
  exports: [
    PromocionaPage
  ]
})
export class PromocionaPageModule {}
