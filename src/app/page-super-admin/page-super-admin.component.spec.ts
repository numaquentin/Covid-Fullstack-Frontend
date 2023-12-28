import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSuperAdminComponent } from './page-super-admin.component';

describe('PageSuperAdminComponent', () => {
  let component: PageSuperAdminComponent;
  let fixture: ComponentFixture<PageSuperAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSuperAdminComponent]
    });
    fixture = TestBed.createComponent(PageSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
