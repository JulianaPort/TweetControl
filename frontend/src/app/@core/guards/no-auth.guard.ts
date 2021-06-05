import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '@app/pages/public/auth/_services/auth.service';
import { Path } from '@core/structs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var isLoggedIn = null;

    this.authService.currentUser.subscribe({
      next: (data) => {
        isLoggedIn = data;
      }
    });

    if (isLoggedIn) {
      this.router.navigate([Path.Tweets]);
      return false;
    }

    return true;
  }
}
