import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userPage',
  templateUrl: './userPage.component.html',
  styleUrls: ['./userPage.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private router:Router) { }
  login:any='';

  logOut(){
    sessionStorage.removeItem('loginid');
    this.router.navigate(['home']);
  }
  home(){
    this.router.navigate(['home'])
  }

  ngOnInit() {
    const sessionuser=sessionStorage.getItem('loginid');
    if(sessionuser)
    this.login=JSON.parse(sessionuser);
  }

}
