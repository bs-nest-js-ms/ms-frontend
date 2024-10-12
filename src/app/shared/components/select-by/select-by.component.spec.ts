import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectByComponent } from './select-by.component';

describe('SelectByComponent', () => {
  let component: SelectByComponent;
  let fixture: ComponentFixture<SelectByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectByComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
