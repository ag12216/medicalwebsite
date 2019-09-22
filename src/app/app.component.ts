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

    ul li a:hover{
     
    }
    `
  ]

})
export class AppComponent {
  title = 'medicalWeb';
  menus = ["ABOUT US","PRODUCTS","R&D(DSIR)","CSR","BUSINESS & DEVELOPMENT","NEWS AND EVENTS","CAREERS","CONTACT US"];
  companyName = 'Ashirwad shipping and logistics pvt ltd';
}
