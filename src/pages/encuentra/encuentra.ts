import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GapiProvider } from '../../providers/gapi/gapi';
/**
 * Generated class for the EncuentraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuentra',
  templateUrl: 'encuentra.html',
})
export class EncuentraPage {

  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gapiProvider: GapiProvider) {
  this.getUsers();
}
  openCards() {
    this.navCtrl.push('CardsPage');
  }
  
  openMenu() {
    this.navCtrl.setRoot('MenuPage');
  }
 
  goToPromociona() {
    this.navCtrl.parent.select(2);
  }
  getUsers() {
    this.gapiProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  
}
