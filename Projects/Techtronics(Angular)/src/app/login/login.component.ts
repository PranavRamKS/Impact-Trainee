import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { environment } from 'src/environments/environment';





@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent {
  userLogin:boolean|undefined;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,private CartService:CartService) { }
  loginForm = this.fb.group({
    username: [, [Validators.required]],
    password: [, [Validators.required, Validators.minLength(6)]]

  })
  
  submit() {
    this.admin();
    this.user();
  }

  admin() {
    this.http.get<any>(environment.adminLogin).subscribe(res => {
      const users = res.find((a: any) => {
        return a.email === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      if (users) {
        alert("Login Successful");
        // this.service.loginid=users;
        sessionStorage.setItem('loginid', JSON.stringify(users));
        this.loginForm.reset();
        this.router.navigate(['admin'])
      }

    })
  }
  user() {
    this.http.get<any>(environment.userLogin).subscribe(res => {
      const users = res.find((a: any) => {
        return a.email === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      if (users) {
        alert("Login Successful");
        sessionStorage.setItem('userId', users.id)
        sessionStorage.setItem('userLogin','true')
        this.CartService.getUsersCartList(sessionStorage.getItem('userId'))
        sessionStorage.setItem('loginid', JSON.stringify(users));
        this.loginForm.reset();
        this.router.navigate(['home'])
      }
      else {
        alert("User Not Found");

      }
    })

  }
}
