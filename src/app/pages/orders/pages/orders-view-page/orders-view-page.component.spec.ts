import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersViewPageComponent } from './orders-view-page.component';

describe('OrdersViewPageComponent', () => {
  let component: OrdersViewPageComponent;
  let fixture: ComponentFixture<OrdersViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
