import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { confirmedValidator } from '../confirmPass';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  
    constructor(private formBuilder:FormBuilder,private service:RegisterService, private route:Router,private http:HttpClient) { }
    Register=this.formBuilder.group({
      Name:[,[Validators.required,]],
      lastName:[,[Validators.required]],
      gender:[,[Validators.required]],
      
      date:[,[Validators.required]],
      email:[,[Validators.required]],
      phone:[,[Validators.required]],
      address:[,[Validators.required]],
      
      password:[,[Validators.required]],
      cpassword:[,[Validators.required]]
    },
   { validator: confirmedValidator('password', 'cpassword') }
    )
  
    registrr(){
      
      if(!this. Register.valid){
        alert("Please fill all the Details");
      }
      else if(this.Register.valid){
        this.service.postRegister(this.Register.value).subscribe(data =>{
          alert("Registerd Sucessfully Press ok to Login");
          this.Register.reset();
          this.route.navigate(['/','login']);
        }, err=>{
          alert("Something went wrong");
        })
      }
  
    }
    ngOnInit() {
  
    }
  canExit(){
    if(this.Register.invalid)
      {
      return confirm("Your registeration is not saved");
    }
    else{
      return true;
    }
  }
 
}
