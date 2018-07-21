import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GapiProvider } from '../../providers/gapi/gapi'
/**
 * Generated class for the PromocionaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promociona',
  templateUrl: 'promociona.html',
})
export class PromocionaPage {

  user = { id: '', nombreevento: '', contacto: '', fecha: '' };
  restapiServer: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public gapiProvider: GapiProvider) {
    this.addUser();
  }

  addUser() {
    this.gapiProvider.addUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

}
