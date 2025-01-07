import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  username? = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      console.log('User is not logged in');
      this.router.navigate(['/user/login']);
    }

    this.username = this.loginService.getUserLogged();
  }

  logout(event: Event) {
    event.preventDefault();
    this.loginService.logout();
    this.username = '';
    this.router.navigate(['/user/login']);
  }
}
