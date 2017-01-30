import { async, TestBed } from '@angular/core/testing';
import { BoxWrapperComponent } from './box-wrapper.component';
describe('BoxWrapperComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BoxWrapperComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BoxWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/mashhood/Tasks/color-box/src/app/box/box-wrapper.component.spec.js.map