import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Injectable()

export class KeengService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true
  });
  constructor(private http: Http) { }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }
  index() {
    let url = 'http://api.keeng.vn/v1/public/home/alldata';
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
  common() {
    let url = 'http://api.keeng.vn/v1/public/home/commondata';
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
}
