import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  cartItems:any;
  constructor(private cartService : CartService) {
    this.cartItems=this.cartService.getItems();
   }

  ngOnInit(): void {
    this.cartService.getUsersCartList(sessionStorage.getItem('userId'))
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
 
  emptycart(){
    this.cartService.removeAllCart();
  }
  getGrandtotal(){
    let grandTotals=0;
    this.cartService.getItems().forEach((things: { price: number; quantity: number; })=> {
      grandTotals += things.price * things.quantity
    });
    return grandTotals;
  }

  deleteitem(row : any){
    this.cartService.deleteitem(row.id)
    .subscribe(res=>{
      alert("item Deleted")
      this.getAllBook();

      })
    }

getAllBook(){
  location.reload();
    }

}
