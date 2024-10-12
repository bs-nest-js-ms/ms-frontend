import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchByComponent } from './input-search-by.component';

describe('InputSearchByComponent', () => {
  let component: InputSearchByComponent;
  let fixture: ComponentFixture<InputSearchByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputSearchByComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
