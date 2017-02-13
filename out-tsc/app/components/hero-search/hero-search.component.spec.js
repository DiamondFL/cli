import { async, TestBed } from '@angular/core/testing';
import { HeroSearchComponent } from './hero-search.component';
describe('HeroSearchComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HeroSearchComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HeroSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/var/www/html/material/src/app/components/hero-search/hero-search.component.spec.js.map