import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesLayoutPageComponent } from './profiles-layout-page.component';

describe('ProfilesLayoutPageComponent', () => {
  let component: ProfilesLayoutPageComponent;
  let fixture: ComponentFixture<ProfilesLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilesLayoutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
