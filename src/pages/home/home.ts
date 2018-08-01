import { WpApiPosts, WpApiMedia } from 'wp-api-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  posts = [];
  searchTerm = '';
  currentPage = 1;

  constructor(public navCtrl: NavController, private wpApiMedia: WpApiMedia, private wpApiPosts: WpApiPosts, private loadingCtrl: LoadingController) {
    this.loadPosts();
  }

  loadPosts(options = {}, append = false) {
    let loading = this.loadingCtrl.create({
      dismissOnPageChange: true
    });
    loading.present();
    
    this.wpApiPosts.getList(options)
    .map(response => response.json())
    .subscribe(data => {
      console.log('posts: ', data);
      for (let post of data) {
        post.media_url = this.getMedia(post.featured_media);
        if (append) {
          this.posts.push(post);
        }
      }
      if (!append) {
        this.posts = data;        
      }
      
      loading.dismiss();
    })
  }

  openPost(post) {
    this.navCtrl.push('PostPage', { post: post });
  }

  getMedia(id): Observable<string> {
    return this.wpApiMedia.get(id)
    .map(res => res.json())
    .map(data => {
      return data['source_url'];
    })
  }

  startSearch() {
    let options = { params: {search: this.searchTerm }};
    this.loadPosts(options);
  }

  loadMore() {
    this.currentPage += 1;

    let options = { params: {page: this.currentPage }};
    this.loadPosts(options, true);
  }
	goBack() {
    this.navCtrl.pop();
  }
}
