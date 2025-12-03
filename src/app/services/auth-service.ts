import { Injectable , signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Register } from '../models/register';

const tokenKey: string = "jwt_token";


export const LoggedIn = signal<boolean>(false);
export const UserName = signal<string>('');



@Injectable({
  providedIn: 'root',
})
export class AuthService {

  api: string = "http://localhost:5045/Token";

  constructor(private http: HttpClient) {

  }
  Login(model: Login):any {
    return this.http.post<Login>(`${this.api}/login`, model);
  }

  Register(model: Register):any {
    return this.http.post<Register>(`${this.api}/register`, model);
  }

  saveToken(token: string, name:string) {
    localStorage.setItem(tokenKey, token);
    LoggedIn.set(true);
    UserName.set(name);
  }

  Logout() {
    LoggedIn.set( false);
    UserName.set('');
    localStorage.removeItem(tokenKey);
  }

  get Token(): string | null {
    return localStorage.getItem(tokenKey);
  }

  isLoggedIn(): boolean {
    var token = localStorage.getItem(tokenKey);
    if (token) {
      LoggedIn.set(true);
      return true;
    }
    else {
      LoggedIn.set(false);
      return false;
    }
  }

}

