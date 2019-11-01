import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeskComponent } from './product-desk.component';

describe('ProductDeskComponent', () => {
  let component: ProductDeskComponent;
  let fixture: ComponentFixture<ProductDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
