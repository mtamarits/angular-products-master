import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  @ViewChild('userNameInput') userNameInput?: ElementRef;
  @Output() logged = new EventEmitter<string>();
  userName = '';
  userPassword = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    if (this.loginService.isLogged()) {
      this.router.navigate(['/user/profile']);
    }
  }

  ngAfterViewInit() {
    // focus on the first input
    this.userNameInput!.nativeElement.focus();
  }

  login() {
    const logged = this.loginService.login(this.userName, this.userPassword);
    if (logged) {
      this.router.navigate(['/user/profile']);
    }
  }

}
