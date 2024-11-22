import { Component, OnInit } from '@angular/core';
import { LaptopProductsService } from 'src/laptopProducts.service';
import { CartService } from '../cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Laptops',
  templateUrl: './Laptops.component.html',
  styleUrls: ['./Laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  getdetails:any;
  asusImg:any=environment
  appleImg:any=environment
  hpImg:any=environment
  dellImg:any=environment
  acerImg:any=environment
  realmeImg:any=environment

  constructor(private service:LaptopProductsService,private cartService:CartService) { 
    this.service.getproduct().subscribe(value=>{ 
      this.getdetails=value;
    })
  }
  countdown = new Date("Aug 11, 2023 17:28:00").getTime();
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
