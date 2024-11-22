import { Component, OnInit } from '@angular/core';
import { AudioProductService } from '../audioProduct.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-audioProducts',
  templateUrl: './audioProducts.component.html',
  styleUrls: ['./audioProducts.component.css']
})
export class AudioProductsComponent implements OnInit {
  prodList: any = "";
  searchFor: any = "";
  finalproduct: any = "";
  searchKey: string = "";
  userId: any;


  constructor(private service: AudioProductService, private route: ActivatedRoute, private cartService: CartService, private router: Router, private http: HttpClient) {
    this.userId = sessionStorage.getItem('userId')
  }

  ngOnInit() {
    this.cartService.getUsersCartList(sessionStorage.getItem('userId'))
    this.service.getproduct().subscribe(data => {
      this.prodList = data;

      this.route.params.subscribe(paramdata => {
        this.searchFor = paramdata['check'];

        for (let product of this.prodList) {

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
    alert("Product added to cart successfully");
    let updatedProductData = {
      ...item,
      userId: this.userId
    }
    console.log(this.userId)
    delete updatedProductData.id;
    this.http.post(environment.cartDetails, updatedProductData).subscribe((data: any) => {
      alert('Audio device added to the Cart');
    });
    this.cartService.addtoCart(item);
    this.router.navigate(['/cart']);
  }
}