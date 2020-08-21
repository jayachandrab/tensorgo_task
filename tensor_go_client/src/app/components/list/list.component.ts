import { Component, OnInit } from '@angular/core';
import {CountryService } from '../../shared/country.service';
import {Pond} from '../../pond';
import {Router} from '@angular/router';
import {Location} from  '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ponds:any;
  mySubscription: any;

  constructor(private countryService:CountryService,private router:Router,private loc:Location) {
   

   }

  ngOnInit(): void {
   
    this.readCountries();
    
  }

  readCountries(){
    this.countryService.readCountries().subscribe(data=>{
      console.log("ind read countries"+data);
      console.log(JSON.stringify(data));
      //data=JSON.stringify(data);
      this.ponds=data;
     
        
      
    },error=>{
      console.log(error);
    }
    );
  }
  doUpdate(user){
    
    console.log("on do update "+JSON.stringify(user));
    this.countryService.setter(user);
    this.router.navigate(['/createUpdate']);


  }
  deleteCountry(country){
    this.countryService.deleteCountry(country._id).subscribe(data=>{
      this.ponds.splice(this.ponds.indexOf(country),1);
    })
  }


  reloadPage() {
    window.location.reload();
 }


}
