import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

interface UserResponse {
  data: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersData = new BehaviorSubject<User[]>([]);
  users$ = this.usersData.asObservable();
  private url = "https://reqres.in/api/users";
  message?: string;
  name?: string


  constructor(private http: HttpClient) { }

  fetchUsers(){
    return this.http.get<UserResponse>(this.url).pipe(
      map(response => {
        const users: User[] = response.data;
        this.usersData.next(users);
        return users
      })
    )

}}
