import { Component, signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Register } from '../../models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  model = signal<Register>(new Register());
  constructor(private auth: AuthService, private router: Router) {

  }

  FormSubmit() {

    if (this.model().password !== this.model().comparePassword) {
      alert("password does not match");
      return;
    }

    this.auth.Register(this.model()).subscribe(
      (res:any) => {        
        this.router.navigate(['login']);
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }
}
