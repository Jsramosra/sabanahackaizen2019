import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueoPage } from './bloqueo.page';

describe('BloqueoPage', () => {
  let component: BloqueoPage;
  let fixture: ComponentFixture<BloqueoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
