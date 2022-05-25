import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductByCategaryComponent } from './view-product-by-categary.component';

describe('ViewProductByCategaryComponent', () => {
  let component: ViewProductByCategaryComponent;
  let fixture: ComponentFixture<ViewProductByCategaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductByCategaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductByCategaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
