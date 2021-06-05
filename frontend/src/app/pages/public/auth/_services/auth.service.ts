import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/@core/models/User';
import { getItem, removeItem, setItem, StorageItem } from '@app/@core/utils';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUserSubject$: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this._currentUserSubject$ = new BehaviorSubject<User | null>(localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser') || ``));
    this.currentUser = this._currentUserSubject$.asObservable();
  }



  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(map(user => {
        console.log(user)
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this._currentUserSubject$.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this._currentUserSubject$.next(null);
  }
}
