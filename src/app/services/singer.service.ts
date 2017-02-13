import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";
import {Singer} from "../database/entities/singer";
import {BASE_URL} from "../configs/app.config";
@Injectable()
export class SingerService {
  private url = BASE_URL + 'singers';
  constructor(private http:Http) { }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  index(): Promise<Singer[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(res => res.json().data as Singer[])
      .catch(this.handleError)
  }

}
