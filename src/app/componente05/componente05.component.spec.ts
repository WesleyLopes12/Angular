import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente05Component } from './componente05.component';

describe('Componente05Component', () => {
  let component: Componente05Component;
  let fixture: ComponentFixture<Componente05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente05Component]
    });
    fixture = TestBed.createComponent(Componente05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
