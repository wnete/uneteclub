import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiUsers } from 'wp-api-angular';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  post: any;
  author: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wpApiUsers: WpApiUsers) {
    this.post = this.navParams.get('post');

    this.wpApiUsers.get(this.post.author)
    .map(res => res.json())
    .subscribe(data => {
      this.author = data;
    });
  }

}

