import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAdministradoresComponent } from './registrar-administradores.component';

describe('RegistrarAdministradoresComponent', () => {
  let component: RegistrarAdministradoresComponent;
  let fixture: ComponentFixture<RegistrarAdministradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAdministradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
