import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {API_URL} from "../configs/app.config";
@Injectable()

export class KeengService {

  constructor(private http: Http) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  albums() {
    let url = API_URL + 'albums';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
  albumList() {
    let url = API_URL + 'apicommon/pub/album/list';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  albumPlayer(id: number) {
    let url = API_URL + 'apicommon/pub/album/' + id
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  allData(params: string) {
    let url = API_URL + 'home/alldata' + params;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
  common() {
    let url = API_URL + 'home/commondata';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  banner() {
    let url = API_URL + 'processBanner?type=wap&code=&is_vip=false';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  capcha() {
    let url = API_URL + 'getCaptcha';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  linkFooter() {
    let url = API_URL + 'link-footer';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  charts() {
    let url = API_URL + 'bxh/songs-videos';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  liveTv() {
    let url = API_URL + 'videos/homeTv';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  home() {
    let url = API_URL + 'apicommon/pub/home';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  songDetail(params: string) {
    let url = API_URL + 'song' + params;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  songs(params: string) {
    let url = API_URL + 'song' + params;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  videos() {
    let url = API_URL + 'homeVideo';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  videoList() {
    let url = API_URL + '/apicommon/pub/video/list';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }
  videoPlayer(identify: string) {
    let url = API_URL + 'apicommon/pub/video/' + identify;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

}
