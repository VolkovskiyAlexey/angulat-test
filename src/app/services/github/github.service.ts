import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Repository} from './../../classes/repository/repository';
import { Http, Response, HttpModule, URLSearchParams }  from '@angular/http';


@Injectable()
export class GithubService {

  private rootEndpoint = 'https://api.github.com/';

  constructor(private http: Http) {

  }

  search(q: string): Observable<Repository[]> {
    return this.http.get(`${this.rootEndpoint}search/repositories?q=${q}`)
      .map(response => response.json().items)
      .catch(this.handleError);
  }

  get(id: number): Observable<Repository> {
    return this.http.get(`${this.rootEndpoint}repositories/${id}`)
      .map(response => {
        console.log(response.json());
        return response.json()
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
