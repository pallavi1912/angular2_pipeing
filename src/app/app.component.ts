import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
      <p>My name is {{name | captalize}}</p>
      <ul>
        <li *ngFor="let num of numbers">
          {{ num | ordinal }}
        </li>
      </ul>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 numbers:any;
 name:any;
 constructor(){
  this.name = "pallavi verma";
  this.numbers=[1,2,3,4,5,6,7,8,9,12,11113,123];
 }
}
