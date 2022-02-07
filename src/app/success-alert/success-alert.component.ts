import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {

   firstName = "Juan";
  lastName = "Maza";
  age = 30;

  constructor() {
    console.log('hello user...');
    
    
   }

   sayHello() {
     console.log('Hekko ${this.firstName}');
     
   }

  ngOnInit(): void {
  }

}
