import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersViewPageComponent } from './users-view-page.component';

describe('UsersViewPageComponent', () => {
  let component: UsersViewPageComponent;
  let fixture: ComponentFixture<UsersViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
