import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLayoutPageComponent } from './users-layout-page.component';

describe('UsersLayoutPageComponent', () => {
  let component: UsersLayoutPageComponent;
  let fixture: ComponentFixture<UsersLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersLayoutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
