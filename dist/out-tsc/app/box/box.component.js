var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Box } from "./box";
export var BoxComponent = (function () {
    function BoxComponent() {
    }
    BoxComponent.prototype.ngOnInit = function () {
        this.box = new Box(this.box);
    };
    BoxComponent.prototype.fillColor = function () {
        var rgb1 = Math.floor(Math.random() * 100);
        var rgb2 = Math.floor(Math.random() * 100);
        var rgb3 = Math.floor(Math.random() * 100);
        this.box.color = "rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")";
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], BoxComponent.prototype, "boxId", void 0);
    BoxComponent = __decorate([
        Component({
            selector: 'app-box',
            templateUrl: './box.component.html',
            styleUrls: ['./box.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BoxComponent);
    return BoxComponent;
}());
//# sourceMappingURL=/home/mashhood/Tasks/color-box/src/app/box/box.component.js.map