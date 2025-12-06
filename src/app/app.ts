import { Component, signal, inject } from '@angular/core';
import { AuthService, LoggedIn, UserName } from './services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CrudApp');


  auth = inject(AuthService);
  loggedIn = LoggedIn;
  name = UserName;

  ngOnInit() {
    this.auth.isLoggedIn();
  }


}
