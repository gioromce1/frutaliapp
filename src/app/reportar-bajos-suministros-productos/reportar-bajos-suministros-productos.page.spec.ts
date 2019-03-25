import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarBajosSuministrosProductosPage } from './reportar-bajos-suministros-productos.page';

describe('ReportarBajosSuministrosProductosPage', () => {
  let component: ReportarBajosSuministrosProductosPage;
  let fixture: ComponentFixture<ReportarBajosSuministrosProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarBajosSuministrosProductosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarBajosSuministrosProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
