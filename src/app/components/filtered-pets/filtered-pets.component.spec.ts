import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredPetsComponent } from './filtered-pets.component';

describe('FilteredPetsComponent', () => {
  let component: FilteredPetsComponent;
  let fixture: ComponentFixture<FilteredPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
