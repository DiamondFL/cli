import { async, TestBed } from '@angular/core/testing';
import { MediaHotComponent } from './media-hot.component';
describe('MediaHotComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MediaHotComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MediaHotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/var/www/html/material/src/app/layout/media-hot/media-hot.component.spec.js.map