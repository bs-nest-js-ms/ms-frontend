import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersLayoutPageComponent } from './orders-layout-page.component';

describe('OrdersLayoutPageComponent', () => {
  let component: OrdersLayoutPageComponent;
  let fixture: ComponentFixture<OrdersLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersLayoutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
