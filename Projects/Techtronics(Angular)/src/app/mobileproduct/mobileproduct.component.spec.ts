/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MobileproductComponent } from './mobileproduct.component';

describe('MobileproductComponent', () => {
  let component: MobileproductComponent;
  let fixture: ComponentFixture<MobileproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
