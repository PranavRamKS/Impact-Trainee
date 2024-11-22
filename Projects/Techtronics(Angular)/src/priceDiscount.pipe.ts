import { Pipe, PipeTransform } from '@angular/core';
import { MobileProductsService } from './app/mobileProducts.service';

@Pipe({
  name: 'priceDiscount'
})
export class PriceDiscountPipe implements PipeTransform {
  constructor(private service:MobileProductsService){

  }
  loop:boolean=this.service.loop;
  discount:any;
  transform(value: any): any {
    if(this.loop){
      this.discount = value/2;
      return this.discount;
    }
    else{
      return value;
    }
  }


}
