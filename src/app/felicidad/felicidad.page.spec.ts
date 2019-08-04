import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelicidadPage } from './felicidad.page';

describe('FelicidadPage', () => {
  let component: FelicidadPage;
  let fixture: ComponentFixture<FelicidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelicidadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelicidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
