import { Component, OnInit } from '@angular/core';
import { AudioProductService } from '../audioProduct.service';
import { CartService } from '../cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  getdetails: any;
  ancImg: any = environment
  onearImg: any = environment
  inearImg: any = environment
  twsImg: any = environment
  overearImg: any = environment
  neckbandImg: any = environment
  btspeakerImg: any = environment
  hometheaterImg: any = environment
  constructor(private service: AudioProductService, private cartService: CartService) {
    this.service.getproduct().subscribe(value => {
      this.getdetails = value;
    })
  }
  countdown = new Date("Aug 04, 2023 17:28:00").getTime();
  demo: any;
  x = setInterval(() => {
    var now = new Date().getTime();
    var offerTime = this.countdown - now;
    var days = Math.floor(offerTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((offerTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((offerTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((offerTime % (1000 * 60)) / 1000);
    this.demo = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (offerTime < 0) {
      clearInterval(this.x);
      this.demo = "Expired";
      //  this.loop=false;
      this.service.loop = false;
      //  this.data.offer=false;
    }
  }, 1000)

  ngOnInit() {
    this.cartService.getUsersCartList(sessionStorage.getItem('userId'))
  }

}
