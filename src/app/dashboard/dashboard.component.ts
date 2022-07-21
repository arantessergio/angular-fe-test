import { Component, OnInit } from '@angular/core';
import {
  MoviesService,
  StudioWithWinCountData,
  YearWithMultipleWinner,
  YearWithMultipleWinnerData,
} from '../movies.service';

interface Year {
  year?: number;
  winnerCount?: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  yearsDisplayedColumns: string[] = ['year', 'winnerCount'];
  studiosDisplayedColumns: string[] = ['name', 'winCount'];

  yearsWithWinnersDataSource: Array<YearWithMultipleWinnerData> = [];
  studiosWithWinCountDataSource: Array<StudioWithWinCountData> = [];

  constructor(private moviesService: MoviesService) {}

  async ngOnInit(): Promise<void> {
    this.yearsWithWinnersDataSource = (
      await this.moviesService.fetchYearsWithMultpleWinners()
    )?.years;

    this.studiosWithWinCountDataSource = (
      await this.moviesService.fetchWinnerSudios()
    )?.studios;
  }
}
