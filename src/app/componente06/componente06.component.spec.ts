import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente06Component } from './componente06.component';

describe('Componente06Component', () => {
  let component: Componente06Component;
  let fixture: ComponentFixture<Componente06Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente06Component]
    });
    fixture = TestBed.createComponent(Componente06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
