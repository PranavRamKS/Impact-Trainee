import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AudioProductService {

  constructor(private http:HttpClient) {

  }
  loop:boolean=true;
 getproduct(){
   return this.http.get(environment.audiDetails);
 } 
 }

