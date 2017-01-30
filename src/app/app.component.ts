import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Home pgae';
  boxQuantity: number = null;
  arr: number[];

  constructor() {
    this.arr = [];
  }

  ngOnInit() {

  }

  genrateArray(): number[] {
    this.arr = [];
    for (let i = 0; i < this.boxQuantity; i++) {
      this.arr.push(i)
    }
    return this.arr;
  }


}
