import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MobileProductsService {

constructor(private http:HttpClient) {

 }
 loop:boolean=true;
getproduct(){
  return this.http.get(environment.mobileDetail);

} 
}
