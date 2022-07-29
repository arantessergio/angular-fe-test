import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Movie, MoviesResponse, MoviesService } from '../movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent implements OnInit {
  moviesColumns = ['id', 'year', 'title', 'winner'];

  moviesDataSource: Array<Movie> = [];

  page?: number = 1;
  size?: number = 20;
  winner?: boolean = false;
  year?: number;

  moviesResponse: MoviesResponse | undefined;
  pageEvent?: PageEvent;

  constructor(private moviesService: MoviesService) {}

  async ngOnInit(): Promise<void> {
    await this.loadInitialResult();
  }

  async loadInitialResult() {
    const result = await this.moviesService.fetchAllMovies(0, 20);

    this.winner = false;
    this.year = undefined;

    this.moviesResponse = result;
    this.moviesDataSource = result.content!;
  }

  async fetchDataPaginating(event: PageEvent) {
    this.pageEvent = event;
    const result = await this.moviesService.fetchAllMovies(
      event.pageIndex + 1,
      event.pageSize,
      this.winner,
      this.year
    );

    this.moviesResponse = result;
    this.moviesDataSource = result.content!;
  }

  async fetchData() {
    const result = await this.moviesService.fetchAllMovies(
      this.pageEvent?.pageIndex ?? 0,
      this.pageEvent?.pageSize ?? 20,
      this.winner,
      this.year
    );

    this.moviesResponse = result;
    this.moviesDataSource = result.content!;
  }
}
