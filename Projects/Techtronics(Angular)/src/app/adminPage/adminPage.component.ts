import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient, private router:Router) { }
  login:any='';
  productForm=this.fb.group({
    title:[,[Validators.required]],
    brand:[,[Validators.required]],
    description:[,[Validators.required]],
    category:[,[Validators.required]],
    price:[,[Validators.required]]
  })
status:boolean=false;
addlaptop(){
  if (this.productForm.valid){
    this.status=true;
    alert("product added successfully");
    this.db();
  }
}
db(){
  var product={
    title:this.productForm.value.title,
    brand:this.productForm.value.brand,
    description:this.productForm.value.description,
    category:this.productForm.value.category,
    price:this.productForm.value.price
  }
  this.http.post<any>(environment.laptopDetails,product).subscribe(data=>{
    
  })
}
productMobile=this.fb.group({
  title:[,[Validators.required]],
  brand:[,[Validators.required]],
  description:[,[Validators.required]],
  category:[,[Validators.required]],
  price:[,[Validators.required]]
  })

current:boolean=false;
addmobile(){
  if (this.productMobile.valid){
    this.current=true;
    alert("product added successfully");
    this.dataBase();
  }
}


dataBase(){
  var product={
    title:this.productMobile.value.title,
    brand:this.productMobile.value.brand,
    description:this.productMobile.value.description,
    category:this.productMobile.value.category,
    price:this.productMobile.value.price
  }
  this.http.post<any>(environment.mobileDetail,product).subscribe(data=>{
    
  })

  
}
productAudio=this.fb.group({
  title:[,[Validators.required]],
  brand:[,[Validators.required]],
  description:[,[Validators.required]],
  category:[,[Validators.required]],
  price:[,[Validators.required]]
})

pro:boolean=false;

addAudio(){
  if (this.productAudio.valid){
    this.current=true;
    alert("product added successfully");
    this.dataStore();
  }
}
dataStore(){
  var product={
    title:this.productAudio.value.title,
    brand:this.productAudio.value.brand,
    description:this.productAudio.value.description,
    category:this.productAudio.value.category,
    price:this.productAudio.value.price
  }
  this.http.post<any>(environment.audiDetails,product).subscribe(data=>{
    
  })
}


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
