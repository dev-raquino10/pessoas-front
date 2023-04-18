import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPessoasComponent } from './formulario-pessoas.component';

describe('FormularioPessoasComponent', () => {
  let component: FormularioPessoasComponent;
  let fixture: ComponentFixture<FormularioPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
