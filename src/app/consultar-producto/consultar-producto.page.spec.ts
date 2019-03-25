import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProductoPage } from './consultar-producto.page';

describe('ConsultarProductoPage', () => {
  let component: ConsultarProductoPage;
  let fixture: ComponentFixture<ConsultarProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarProductoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
