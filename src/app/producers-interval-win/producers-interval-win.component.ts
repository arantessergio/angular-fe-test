import { Component, OnInit } from '@angular/core';
import { MoviesService, StudioRangeIntervalData } from '../movies.service';

@Component({
  selector: 'app-producers-interval-win',
  templateUrl: './producers-interval-win.component.html',
  styleUrls: ['./producers-interval-win.component.css'],
})
export class ProducersIntervalWinComponent implements OnInit {
  producersWinIntervalColumns: string[] = [
    'producer',
    'interval',
    'previousWin',
    'followingWin',
  ];

  producersMinIntervalDataSource: Array<StudioRangeIntervalData> = [];
  producersMaxIntervalDataSource: Array<StudioRangeIntervalData> = [];

  constructor(private moviesService: MoviesService) {}

  async ngOnInit(): Promise<void> {
    const producersWinIntervalResult =
      await this.moviesService.fetchProducersIntervalBetweenWin();

    this.producersMinIntervalDataSource = producersWinIntervalResult?.min;
    this.producersMaxIntervalDataSource = producersWinIntervalResult?.max;
  }
}
