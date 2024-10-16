import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

  constructor(private http: HttpClient) {}

  register()
  {
    let bodyData =
      {
        "firstname" : this.firstname,
        "lastname" : this.lastname,
        "email" : this.email,
        "password" : this.password,
      };
    this.http.post("http://localhost:9992/user/create",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("User Registered Successfully")
    });
  }
  save()
  {
    this.register();
  }

}
