import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterLink, RouterOutlet,
  RouterLinkActive,
  Router
} from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Products';
  user = '';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.user = this.loginService.getUserLogged();
  }

  ngDoCheck() {
    this.user = this.loginService.getUserLogged();
  }

  onUserLogin(user: string) {
    this.user = user;
  }
}
