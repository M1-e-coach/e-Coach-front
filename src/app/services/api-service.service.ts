import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8000/api';

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUserById(id) {
    return this.http.get(`${this.baseUrl}/users/${id}`);
    // return this.http.get(`${this.baseUrl}/users/infos/${id}`);
  }

  putUserInfos(id, data) {
    console.log(data);
    console.log(`${this.baseUrl}/users/infos/${id}`);
    return this.http.put(`${this.baseUrl}/users/infos/${id}`, data).subscribe(response => {
      console.log(response);
    });
    // return this.http.get(`${this.baseUrl}/users/infos/${id}`);
  }

  getCoachById(id) {
    return this.http.get(`${this.baseUrl}/coachs/${id}`);
  }

  getCoachByGame(jeu) {
    return this.http.get(`${this.baseUrl}/coachs/jeu/${jeu}`);
  }


  getCoach() {
    return this.http.get(`${this.baseUrl}/coachs`);
  }

  postRegister(user) {
    console.log(user);
    return this.http.put(`${this.baseUrl}/register`, user);
  }

  postLogin(user) {
    console.log(user);
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  putGolcoin(id, amount) {
    return this.http.put(`${this.baseUrl}/coin/${id}`, {
      amount: amount,
    });
  }
}
