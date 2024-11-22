import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetPass',
  templateUrl: './resetPass.component.html',
  styleUrls: ['./resetPass.component.css']
})
export class ResetPassComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient, private router:Router) { }
 reset=this.fb.group({
  username:[,[Validators.required,Validators.minLength(3)],Validators.pattern("^[A-Z][a-z]*[\s{1}]*[A-Za-z]$")]
 })
  ngOnInit() {
  }
submit(){
  alert("Reset e-mail sent");
}

}
