import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../services/api/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {


  firstname: string ="";
  lastname: string ="";
  email: string ="";
  password: string ="";
  confirmPassword: string ="";


  constructor(private userService: UserService) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.userService.register(this.firstname, this.lastname, this.email, this.password).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('User Registered Successfully');
      },
      (error) => {
        console.error('Error during registration:', error);
        alert('An error occurred during registration');
      }
    );
  }
  save()
  {
    this.register();
  }

}
