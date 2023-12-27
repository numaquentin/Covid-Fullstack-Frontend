import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuperAdminComponent } from './login-super-admin.component';

describe('LoginSuperAdminComponent', () => {
  let component: LoginSuperAdminComponent;
  let fixture: ComponentFixture<LoginSuperAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSuperAdminComponent]
    });
    fixture = TestBed.createComponent(LoginSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
