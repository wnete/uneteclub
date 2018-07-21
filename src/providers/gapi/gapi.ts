import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class GapiProvider {

  apiUrl = "https://sheetsu.com/apis/v1.0bu/3e6d7be4be8d"

  constructor(public http: HttpClient) {
    console.log('Hello GapiProvider Provider');
  }
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/sheets/Variables').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/sheets/Variables', JSON.stringify(data), httpOptions)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
