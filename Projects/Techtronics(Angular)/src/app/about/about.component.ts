import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.getUsersCartList(sessionStorage.getItem('userId'))
  }

}
