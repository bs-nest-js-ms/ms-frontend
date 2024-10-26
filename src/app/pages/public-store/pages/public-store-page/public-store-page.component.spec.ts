import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicStorePageComponent } from './public-store-page.component';

describe('PublicStorePageComponent', () => {
  let component: PublicStorePageComponent;
  let fixture: ComponentFixture<PublicStorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicStorePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicStorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
