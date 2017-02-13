import { async, TestBed } from '@angular/core/testing';
import { KeengComponent } from './keeng.component';
describe('KeengComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [KeengComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(KeengComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/var/www/html/material/src/app/components/keeng/keeng.component.spec.js.map