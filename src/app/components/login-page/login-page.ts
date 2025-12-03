import { Component, signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  model = signal<Login>(new Login());
  constructor(private auth: AuthService, private router: Router) {
   
  }

  FormSubmit() {
    this.auth.Login(this.model()).subscribe(
      (res:any) => {
        this.auth.saveToken(res.token, res.name);
        console.info(`Token: ${res.token}`);
        this.router.navigate(['index']);
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }
}
