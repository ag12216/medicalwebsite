import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[
    `
    ul li a{
      color: white;
    }

    
    `
  ]

})
export class AppComponent {
  title = 'medicalWeb';
  menus = ["ABOUT US","PRODUCTS","R&D(DSIR)","CSR","BUSINESS & DEVELOPMENT","NEWS AND EVENTS","CAREERS","CONTACT US"];
  companyName = 'Ashirwad shipping and logistics pvt ltd';
  arr = [1,2,3,4,5,6,7,8,9,10,11,12,113,14,15,16,17,1,8];
}
