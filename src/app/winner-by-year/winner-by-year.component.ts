import { Component, OnInit } from '@angular/core';
import { MoviesService, WinnerByYear } from '../movies.service';

@Component({
  selector: 'app-winner-by-year',
  templateUrl: './winner-by-year.component.html',
  styleUrls: ['./winner-by-year.component.css']
})
export class WinnerByYearComponent implements OnInit {

  winnerYear: number = 2016;

  winnerByYearColumns: Array<string> = ['id', 'year', 'title'];
  winnersByYearDataSource: Array<WinnerByYear> = [];

  constructor(private moviesService: MoviesService) { }

  async ngOnInit(): Promise<void> {}

  async fetchData() {
    const winnerByYearResult = await this.moviesService.fetchMovieByYear(
      true,
      this.winnerYear
    );

    this.winnersByYearDataSource = winnerByYearResult;
  }

}
