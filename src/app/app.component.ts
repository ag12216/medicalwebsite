import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 styles:[
   `
   a{
     margin-right: 2em;
    margin-left: 2em;
   }
   `
 ]
})
export class AppComponent {
  title = 'medicalWeb';
  menus = ["ABOUT US","PRODUCTS","R&D(DSIR)","CSR","BUSINESS DEVELOPMENT","NEWS AND EVENTS","CAREERS","CONTACT US"];
}
