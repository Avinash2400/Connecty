import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewSkipTestsComponent } from './add-review-skip-tests.component';

describe('AddReviewSkipTestsComponent', () => {
  let component: AddReviewSkipTestsComponent;
  let fixture: ComponentFixture<AddReviewSkipTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReviewSkipTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewSkipTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
