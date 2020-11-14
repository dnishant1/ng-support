import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  bookings:any = [];
  browser:boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string,private data:DataService) {

 this.browser = isPlatformBrowser(platformId) ? true : false;
     


  


   }

  ngOnInit() {
     


    this.getBookings(); 




    

  }

  getBookings(): void {
    this.data.getBookings().subscribe((v:any)=>{

     this.bookings = v;
     
     });
}

}
