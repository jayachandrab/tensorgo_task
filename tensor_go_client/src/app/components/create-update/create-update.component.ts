import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {CountryService } from '../../shared/country.service';
import {Pond} from '../../pond';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  pond:any;
  constructor(private router:Router,private countryService:CountryService) { }
  @Input()
  phone:string;
  ngOnInit(): void {
    this.phone = localStorage.getItem('phone');
    console.log("after login in create "+this.phone);
    this.pond=this.countryService.getter();
    console.log("in create update ==== "+JSON.stringify(this.pond));
  }
  createOrUpdate()
  {
    if(this.pond.id==undefined)
    {
      this.pond.phone=this.phone;
    console.log("in create fresh ");
    // this.countryService.createCountry(this.pond).subscribe(data=>{
    //   console.log("after creation "+JSON.stringify(data));
    //   this.router.navigate(['/list']);
    // },error=>{
    //   console.log("create error "+error);    })
  }
  else{
    console.log("in update old");
    console.log(JSON.stringify(this.pond))
    // this.pond.phone=this.phone;
    this.countryService.updateCountry(this.pond).subscribe(data=>
      {
      console.log("after creation=====> "+JSON.stringify(data));
      this.router.navigate(['/']);
    },error=>{
      console.log("UPdate error "+error);
    })
  }

  }
}
