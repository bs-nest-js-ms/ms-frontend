import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsViewPageComponent } from './products-view-page.component';

describe('ProductsViewPageComponent', () => {
  let component: ProductsViewPageComponent;
  let fixture: ComponentFixture<ProductsViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
