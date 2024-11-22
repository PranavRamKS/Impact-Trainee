import { Component, OnInit } from '@angular/core';
import { MobileProductsService } from '../mobileProducts.service';
import { CartService } from '../cart.service';
import { PriceDiscountPipe } from 'src/priceDiscount.pipe';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
getdetails:any;
  constructor(private service:MobileProductsService,private cartService:CartService) { 
    this.service.getproduct().subscribe(value=>{ 
      this.getdetails=value;
    })
  }
// flash offer popup
countdown = new Date("Aug 04, 2023 17:28:00").getTime();
demo:any;
x= setInterval( () =>{
 var now = new Date().getTime();
 var offerTime = this.countdown - now;
 var days = Math.floor(offerTime/(1000*60*60*24));
 var hours = Math.floor((offerTime % (1000*60*60*24)) / (1000*60*60));
 var minutes = Math.floor((offerTime % (1000*60*60)) / (1000*60));
 var seconds = Math.floor((offerTime % (1000*60)) / 1000);
 this.demo = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
 if(offerTime<0){
   clearInterval(this.x);
   this.demo = "Expired";
  //  this.loop=false;
  this.service.loop=false;
  //  this.data.offer=false;
  }
 },1000)
  ngOnInit() {
    this.cartService.getUsersCartList(sessionStorage.getItem('userId'))
  }

}
