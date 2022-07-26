import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from '../movies.service';

import { ProducersIntervalWinComponent } from './producers-interval-win.component';

describe('ProducersIntervalWinComponent', () => {
  let component: ProducersIntervalWinComponent;
  let fixture: ComponentFixture<ProducersIntervalWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProducersIntervalWinComponent],
      providers: [MoviesService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProducersIntervalWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title Produtores com maior e menor intervalo entre vitórias', () => {
    const fixture = TestBed.createComponent(ProducersIntervalWinComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('#producers-interval-wins-title')?.textContent
    ).toContain('Produtores com maior e menor intervalo entre vitórias');
  });
});
