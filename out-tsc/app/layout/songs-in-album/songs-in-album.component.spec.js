import { async, TestBed } from '@angular/core/testing';
import { SongsInAlbumComponent } from './songs-in-album.component';
describe('SongsInAlbumComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SongsInAlbumComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SongsInAlbumComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/var/www/html/material/src/app/layout/songs-in-album/songs-in-album.component.spec.js.map