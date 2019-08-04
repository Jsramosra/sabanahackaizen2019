import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesicionesfPage } from './desicionesf.page';

describe('DesicionesfPage', () => {
  let component: DesicionesfPage;
  let fixture: ComponentFixture<DesicionesfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesicionesfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesicionesfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
