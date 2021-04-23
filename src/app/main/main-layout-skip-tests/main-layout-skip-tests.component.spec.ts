import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutSkipTestsComponent } from './main-layout-skip-tests.component';

describe('MainLayoutSkipTestsComponent', () => {
  let component: MainLayoutSkipTestsComponent;
  let fixture: ComponentFixture<MainLayoutSkipTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutSkipTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutSkipTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
