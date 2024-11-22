import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-Purchase',
  templateUrl: './Purchase.component.html',
  styleUrls: ['./Purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private forms:FormBuilder) { }
  login:any='';
  paymentForm=this.forms.group({
    
    cardNumber:[,[Validators.required]]
  })
  

  ngOnInit() {
    const sessionuser=sessionStorage.getItem('loginid');
    if(sessionuser)
    this.login=JSON.parse(sessionuser);
  }

}
