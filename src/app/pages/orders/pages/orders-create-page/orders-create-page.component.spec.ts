import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCreatePageComponent } from './orders-create-page.component';

describe('OrdersCreatePageComponent', () => {
  let component: OrdersCreatePageComponent;
  let fixture: ComponentFixture<OrdersCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
