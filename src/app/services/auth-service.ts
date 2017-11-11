import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const apiUrl = 'http://localhost/login_authentication/restapi/';

@Injectable()
export class AuthService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: this.headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  login(credentials): Promise<any> {
    const url = apiUrl + 'login';
    return this.http.post(url, credentials, {headers: this.headers}).toPromise();
  }

  register(credentials): Promise<any> {
    const url = apiUrl + 'register';
    return this.http.post(url, credentials, {headers: this.headers}).toPromise();
  }
}
