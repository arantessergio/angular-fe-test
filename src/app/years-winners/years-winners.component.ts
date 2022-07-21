import { Component, OnInit } from '@angular/core';
import { MoviesService, YearWithMultipleWinnerData } from '../movies.service';

@Component({
  selector: 'app-years-winners',
  templateUrl: './years-winners.component.html',
  styleUrls: ['./years-winners.component.css']
})
export class YearsWinnersComponent implements OnInit {

  yearsDisplayedColumns: string[] = ['year', 'winnerCount'];
  yearsWithWinnersDataSource: Array<YearWithMultipleWinnerData> = [];

  constructor(private moviesService: MoviesService) { }

  async ngOnInit(): Promise<void> {
    this.yearsWithWinnersDataSource = (
      await this.moviesService.fetchYearsWithMultpleWinners()
    )?.years;
  }

}
