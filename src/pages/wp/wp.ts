import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wp',
  templateUrl: 'wp.html',
})
export class WpPage {
  page: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = this.navParams.get('page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WpPage');
  }

}
