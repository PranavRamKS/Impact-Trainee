import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getItems(){
    return this.cartItemList;
  }
  getTotalPrice() : number{
    let Total = 0;
    this.cartItemList.map((a:any)=>{
      Total += a.total;
    })
    return Total;
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  getUsersCartList(userid:any){
    // alert (userid)
    return this.http.get(`http://localhost:3000/cart?userId=${userid}`,{observe:'response'}).subscribe((res)=>{
      if(res && res.body){
        this.cartItemList = res.body;
        this.productList.next(this.cartItemList);
        console.log(this.productList);
      }
    });
  }
  
deleteitem(id:number){
  return this.http.delete<any>(environment.cartDetails+id)
  .pipe(map((res:any)=>{
    return res;
    }))
  }
}
