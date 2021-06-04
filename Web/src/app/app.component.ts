import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '@core/services/seo';
import { ThemeService } from '@core/services/theme';
import { Path } from '@core/structs';
import { Observable } from 'rxjs';
import { User } from './@core/models/User';
import { AuthService } from './pages/public/auth/_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUser!: Observable<User | null>;

  constructor(
    private router: Router,
    private seoService: SeoService,
    private themeService: ThemeService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.currentUser= this.authService.currentUser;
    this.runGlobalServices();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate([`/${Path.SignIn}`]);
  }

  private runGlobalServices(): void {
    this.seoService.init();
    this.themeService.init();
  }
}
