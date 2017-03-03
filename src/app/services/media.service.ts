import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AUDIO_DOMAIN, VIDEO_DOMAIN, API_URL} from "../configs/app.config";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MediaService {

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

  audio(params: string) {
    let url = AUDIO_DOMAIN + params;
    return this.http.get(url)
      .toPromise()
      .then(res => res["_body"] === "WRONG FORMAT SOURCE" ? "" : res.json()[0].src)
      .catch(this.handleError);
  }

  video(params: string) {
    let url = VIDEO_DOMAIN + params;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

}
