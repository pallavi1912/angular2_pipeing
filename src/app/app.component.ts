import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>
      <ul>
        <li *ngFor="let num of numbers">
          {{ num | ordinal }}
        </li>
      </ul>
    </div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(){
  this.numbers=[1,2,3,4,5,6,7,8,9,12,11113,123];
 }
}
