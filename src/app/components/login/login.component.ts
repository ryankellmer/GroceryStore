import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  show: boolean = false;

  constructor(private router: Router) {}

  submit() {
    if (this.username == 'admin' && this.password == 'password') {
      this.router.navigate(['/inventory']);
    }
    this.clear();
  }

  clear() {
    this.username = '';
    this.password = '';
    this.show = true;
  }
}
