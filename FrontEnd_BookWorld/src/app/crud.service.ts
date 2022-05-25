import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/users`, user);
  }
  getUser(): Observable<any> {
    return this.http.get<User>(`http://localhost:3000/users`);
  }
}
