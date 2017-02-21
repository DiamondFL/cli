/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AudioListComponent } from './audio-list.component';

describe('AudioListComponent', () => {
  let component: AudioListComponent;
  let fixture: ComponentFixture<AudioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
