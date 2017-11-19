import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const apiUrl = 'http://localhost:3000/';

@Injectable()
export class AuthService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  login(credentials,type): Promise<any> {
    return this.http.post(apiUrl+type, credentials, {headers: this.headers}).toPromise();
  }

  register(credentials): Promise<any> {
    const url = apiUrl;
    return this.http.post(url, credentials, {headers: this.headers}).toPromise();
  }
}
