import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {Pond} from '../pond';
import {FarmerRegistration} from '../farmerRegistration';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private pond:any;
  private farmer:FarmerRegistration;
  private phone:string;
  //private baseUri:string="http://localhost:3000";
  private baseUri:string="http://localhost:8000/getUser/";
  private headers=new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  createCountry(pond:Pond){
    console.log("sending request to node server  =>=========== "+JSON.stringify(pond));
    return this.http.post("http://localhost:3000/create",pond,{headers:this.headers});
  }

  readCountries(){
    const login=localStorage.getItem('phone');
    return this.http.get(this.baseUri);
  }

  updateCountry(pond:any){
    console.log("=============in update service======================");
    return this.http.put("http://localhost:8000/update/"+pond.id,pond);
  }

  deleteCountry(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id);
  }
setter(pond:any){
  this.pond=pond;


}
getter(){
  
  return this.pond;
}
setPhone(phone){
 
this.phone=phone;
console.log("set phone service"+this.phone);
}
getPhone(){
  return this.phone;
}
setFarmer(farmer:FarmerRegistration){
  this.farmer=farmer;
}
getFarmer(){
  return this.farmer;
}

regiSterFarmer(farmer:FarmerRegistration){

  return this.http.post("http://localhost:3000/registerfarmer",farmer,{headers:this.headers});
}
login(data){
  console.log("in login service");
  console.log(data);
  return this.http.post("http://localhost:3000/login",data,{headers:this.headers});
}
}
