import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../services/api/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.email, this.password).subscribe(
      (resultData: any) => {
        if (resultData.status && resultData.token) {
          this.userService.saveSession(resultData.token);
          this.router.navigateByUrl('/'); // Redirige vers la page principale
        } else {
          alert('Incorrect Email or Password');
        }
      },
      (error) => {
        console.error('Error during login:', error);
        alert('An error occurred during login');
      }
    );
  }


}
