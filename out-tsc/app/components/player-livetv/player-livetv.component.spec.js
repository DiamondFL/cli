import { async, TestBed } from '@angular/core/testing';
import { PlayerLivetvComponent } from './player-livetv.component';
describe('PlayerLivetvComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PlayerLivetvComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PlayerLivetvComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/var/www/html/material/src/app/components/player-livetv/player-livetv.component.spec.js.map