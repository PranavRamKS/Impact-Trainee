import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor() { }
  login:any='';
  hideLogin:boolean=true;


  ngOnInit() {
    const sessionuser=sessionStorage.getItem('loginid');
    if(sessionuser){
      this.login=JSON.parse(sessionuser);
      this.hideLogin=false;
    }
  }

}
