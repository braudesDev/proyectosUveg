import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVideojuegoComponent } from './agregar-videojuego.component';

describe('AgregarVideojuegoComponent', () => {
  let component: AgregarVideojuegoComponent;
  let fixture: ComponentFixture<AgregarVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
