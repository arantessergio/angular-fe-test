import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from '../movies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AllMoviesComponent } from './all-movies.component';

describe('AllMoviesComponent', () => {
  let component: AllMoviesComponent;
  let fixture: ComponentFixture<AllMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllMoviesComponent],
      providers: [MoviesService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title Lista de filmes', () => {
    const fixture = TestBed.createComponent(AllMoviesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#all-movies-title')?.textContent).toContain(
      'Lista de filmes'
    );
  });
});
