import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLayoutPageComponent } from './products-layout-page.component';

describe('ProductsLayoutPageComponent', () => {
  let component: ProductsLayoutPageComponent;
  let fixture: ComponentFixture<ProductsLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsLayoutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
