/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeengComponent } from './keeng.component';

describe('KeengComponent', () => {
  let component: KeengComponent;
  let fixture: ComponentFixture<KeengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
