import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

const apiUrl = 'http://localhost:3000/';

@Injectable()
export class AuthService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http, private router: Router) {
    console.log('Hello AuthService Provider');
  }

  isLoggedIn(){
    const userID = localStorage.getItem('currentUserID');
    const userName = localStorage.getItem('currentUserName');
    const userStatus = localStorage.getItem('currentUserStatus');
    if(userID) {
      this.router.navigateByUrl("/dashboard");
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  login(credentials,type): Promise<any> {
    return this.http.post(apiUrl+type, credentials, {headers: this.headers}).toPromise();
  }

  register(credentials): Promise<any> {
    const url = apiUrl;
    return this.http.post(url, credentials, {headers: this.headers}).toPromise();
  }
}
