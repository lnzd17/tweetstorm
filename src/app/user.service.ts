import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    const url = `https://twitter-api-lkd.herokuapp.com/users/${username}`;
    return this.http.get(url)
     .map(this.extractData)
     .catch(this.handleError);
  }

  extractData(res: Response) {
    return res;
  }

  handleError(error: Response | any) {
    console.log(error);
    return Observable.throw(error);
  }

}
