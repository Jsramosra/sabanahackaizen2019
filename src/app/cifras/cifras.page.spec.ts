import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifrasPage } from './cifras.page';

describe('CifrasPage', () => {
  let component: CifrasPage;
  let fixture: ComponentFixture<CifrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
