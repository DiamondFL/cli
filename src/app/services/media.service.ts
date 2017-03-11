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
      .then(res => res["_body"] === "WRONG FORMAT SOURCE" ? "404" : res)
      .catch(this.handleError);
  }

  video(url: string) {
    let params = ['&rt=p', '&rt=wp', '&rt=cp'];
    let str: string = url.slice(url.lastIndexOf('&rt'));
    let urls: string[] = [];
    params.forEach(function (k) {
      urls.push(url.replace(str, k));
    });
    let promises: any[] = [];
    let http = this.http;
    urls.forEach(function (url) {
      let promise = new Promise(
        (resolve, reject) => {
          http.get(url).toPromise()
            .then(res => {
              resolve(res.json()[0])
            })
        }
      );
      promises.push(promise);
    });
    return Promise.all(promises).then(res => {
      return res;
    });
  }

  setHeaders(data, res) {
    data['headers']['audio'] = res.headers.get('domain.audio');
    data['headers']['video'] = res.headers.get('domain.video');
    data['headers']['image'] = res.headers.get('domain.image');
    return data;
  }

  normalizeResult(res) {
    let data: any = {headers: {}, data: []};
    data = this.setHeaders(data, res);
    data['data'] = res.json();
    return data;
  }

  normalizeAudioSrc(domain, data) {
    for (let i in data) {
      data[i].src = domain + data[i].path;
    }
    return data;
  }

  normalizeImageSrc(domain, data) {
    for (let i in data) {
      data[i].image = domain + JSON.parse(data[i].images)[0]['origin'];
    }
    return data;
  }

  normalizeVideoSrc(domain, data) {
    for (let i in data) {
      data[i].src = domain + data[i].path;
    }
    return data;
  }

  normalizeSrc(domains: any[], data) {
    for (let domain of domains) {
      if (domain[0] === 'audio') data = this.normalizeAudioSrc(domain[1], data);
      if (domain[0] === 'image') data = this.normalizeImageSrc(domain[1], data);
      if (domain[0] === 'video') data = this.normalizeVideoSrc(domain[1], data);
    }
    return data;
  }
}
