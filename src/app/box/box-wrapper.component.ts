import {Component, OnInit, Input} from '@angular/core';
import {Box} from "./box";

@Component({
  selector: 'app-box-wrapper',
  templateUrl: './box-wrapper.component.html',
  styleUrls: ['./box-wrapper.component.css']
})
export class BoxWrapperComponent implements OnInit {

  box: Box;
  // boxList: Box[];
  @Input() boxId: any;

  constructor() {

  }

  ngOnInit() {
    this.box = new Box(this.boxId);
  }

}
