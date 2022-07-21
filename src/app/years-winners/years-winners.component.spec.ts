import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsWinnersComponent } from './years-winners.component';

describe('YearsWinnersComponent', () => {
  let component: YearsWinnersComponent;
  let fixture: ComponentFixture<YearsWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearsWinnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearsWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
