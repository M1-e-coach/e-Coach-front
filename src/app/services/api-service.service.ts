import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://164.132.225.166/web/app.php/api';

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getCoach() {
    return this.http.get(`${this.baseUrl}/coachs`);
  }

  postRegister(user) {
    console.log(user);
    return this.http.post(`${this.baseUrl}/register`, user).subscribe(data => {
      console.log(data);
    });
  }

  postLogin(user) {
    console.log(user);
    return this.http.post(`${this.baseUrl}/login`, user);
  }
}
