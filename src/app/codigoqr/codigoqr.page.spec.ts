import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoqrPage } from './codigoqr.page';

describe('CodigoqrPage', () => {
  let component: CodigoqrPage;
  let fixture: ComponentFixture<CodigoqrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoqrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
