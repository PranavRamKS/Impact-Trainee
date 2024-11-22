import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileProductsService } from '../mobileProducts.service';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobileproduct',
  templateUrl: './mobileproduct.component.html',
  styleUrls: ['./mobileproduct.component.css']
})
export class MobileproductComponent implements OnInit {
  productList: any = "";
  searchFor: any = "";
  finalproduct: any = "";
  searchKey: string = "";
  userId:any;
  userLogin:boolean|undefined;

  constructor(private service: MobileProductsService, private route: ActivatedRoute, private cartService: CartService, private router: Router,private http:HttpClient) {
    this.userId=sessionStorage.getItem('userId');
    this.userLogin=Boolean(sessionStorage.getItem('userLogin'));
    console.log(this.userLogin)
   }
   
   
  ngOnInit() {
    this.cartService.getUsersCartList(sessionStorage.getItem('userId'))
    this.service.getproduct().subscribe(data => {
      this.productList = data;

      this.route.params.subscribe(paramdata => {
        this.searchFor = paramdata['check'];

        for (let product of this.productList) {

          if (product.title == this.searchFor) {
            this.finalproduct = product;
            break;
          }
        }
      })
    })
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  addtocart(item: any) {
    if(this.userLogin){
      alert("Product added to cart successfully");
    let updatedProductData={
      ...item,
      userId:this.userId
    }
    console.log(this.userId)
    delete updatedProductData.id;
    this.http.post(environment.cartDetails,updatedProductData).subscribe((data: any) => {
      alert('Mobile device added to the Cart');
    });
    this.cartService.addtoCart(item);
    this.router.navigate(['/cart']);
    }
    else{
      alert("Please Login to access");
    this.router.navigate(['/login'])
    }
  }
 
}
