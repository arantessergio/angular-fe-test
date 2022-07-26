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

  it('should render title Visualizar filme vencedor por ano', () => {
    const fixture = TestBed.createComponent(WinnerByYearComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#winner-by-year-title')?.textContent).toContain(
      'Visualizar filme vencedor por ano'
    );
  });
});
