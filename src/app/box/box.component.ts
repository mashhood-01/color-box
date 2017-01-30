import {Component, OnInit, Input} from '@angular/core';
import {Box} from "./box";
import any = jasmine.any;

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit{
  box: Box;
  @Input() boxId: any;

  constructor() {
  }

  ngOnInit() {
    this.box = new Box(this.box);
  }

  fillColor(): void {
    var rgb1 = Math.floor(Math.random() * 100);
    var rgb2 = Math.floor(Math.random() * 100);
    var rgb3 = Math.floor(Math.random() * 100);
    this.box.color = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  }
}
