import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAdministradoresEditarComponent } from './registrar-administradores-editar.component';

describe('RegistrarAdministradoresEditarComponent', () => {
  let component: RegistrarAdministradoresEditarComponent;
  let fixture: ComponentFixture<RegistrarAdministradoresEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAdministradoresEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAdministradoresEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
