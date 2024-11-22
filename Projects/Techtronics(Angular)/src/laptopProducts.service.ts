import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LaptopProductsService {

constructor(private http:HttpClient) {

 }
 loop:boolean=true;
getproduct(){
  return this.http.get(environment.laptopDetails);
} 
}
