import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerByYearComponent } from './winner-by-year.component';

describe('WinnerByYearComponent', () => {
  let component: WinnerByYearComponent;
  let fixture: ComponentFixture<WinnerByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerByYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
