import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from "./box.component";
import {BoxWrapperComponent} from "./box-wrapper.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BoxComponent, BoxWrapperComponent
  ],
  exports: [BoxComponent, BoxWrapperComponent]
})
export class BoxModule { }
