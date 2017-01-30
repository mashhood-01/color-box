var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from "./box.component";
import { BoxWrapperComponent } from "./box-wrapper.component";
export var BoxModule = (function () {
    function BoxModule() {
    }
    BoxModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule
            ],
            declarations: [
                BoxComponent, BoxWrapperComponent
            ],
            exports: [BoxComponent, BoxWrapperComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BoxModule);
    return BoxModule;
}());
//# sourceMappingURL=/home/mashhood/Tasks/color-box/src/app/box/box.module.js.map