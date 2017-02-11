import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Hero} from "../classes/hero";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {
  }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map(res => res.json().data as Hero[])
  }
}
