import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from '../movies.service';

import { WinnerByYearComponent } from './winner-by-year.component';

describe('WinnerByYearComponent', () => {
  let component: WinnerByYearComponent;
  let fixture: ComponentFixture<WinnerByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinnerByYearComponent],
      providers: [MoviesService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnerByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
