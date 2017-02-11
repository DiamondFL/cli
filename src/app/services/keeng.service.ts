import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class KeengService {

  constructor(private http: Http) { }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }
  index() {
    let url = 'http://api.keeng.vn/v1/public/home/alldata';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
  common() {
    let url = 'http://api.keeng.vn/v1/public/home/commondata';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
}
