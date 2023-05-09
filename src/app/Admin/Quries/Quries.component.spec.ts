/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuriesComponent } from './Quries.component';

describe('QuriesComponent', () => {
  let component: QuriesComponent;
  let fixture: ComponentFixture<QuriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
