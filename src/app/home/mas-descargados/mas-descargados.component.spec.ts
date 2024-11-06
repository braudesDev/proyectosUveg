import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasDescargadosComponent } from './mas-descargados.component';

describe('AboutComponent', () => {
  let component: MasDescargadosComponent;
  let fixture: ComponentFixture<MasDescargadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasDescargadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasDescargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
