/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediaHotComponent } from './media-hot.component';

describe('MediaHotComponent', () => {
  let component: MediaHotComponent;
  let fixture: ComponentFixture<MediaHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
