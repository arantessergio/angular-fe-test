import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from '../movies.service';

import { YearsWinnersComponent } from './years-winners.component';

describe('YearsWinnersComponent', () => {
  let component: YearsWinnersComponent;
  let fixture: ComponentFixture<YearsWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearsWinnersComponent],
      providers: [MoviesService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(YearsWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title Anos com mais vencedores', () => {
    const fixture = TestBed.createComponent(YearsWinnersComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#years-winners-title')?.textContent).toContain(
      'Anos com mais vencedores'
    );
  });
});
