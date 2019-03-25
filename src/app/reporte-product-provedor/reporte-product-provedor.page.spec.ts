import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteProductProvedorPage } from './reporte-product-provedor.page';

describe('ReporteProductProvedorPage', () => {
  let component: ReporteProductProvedorPage;
  let fixture: ComponentFixture<ReporteProductProvedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteProductProvedorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteProductProvedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
