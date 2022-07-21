import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://tools.texoit.com/backend-java/api/movies';

export interface YearWithMultipleWinner {
  years: Array<YearWithMultipleWinnerData>;
}

export interface YearWithMultipleWinnerData {
  year?: number;
  winnerCount?: number;
}

export interface StudioWithWinCount {
  studios: Array<StudioWithWinCountData>;
}

export interface StudioWithWinCountData {
  name?: string;
  winCount?:number;
}

export interface StudioIntervalBetweenWin {
  min: Array<StudioRangeIntervalData>;
  max: Array<StudioRangeIntervalData>;
}

export interface StudioRangeIntervalData {
  producer?: string;
  interval?: number;
  previousWin?: number;
  followingWin?: number;
}

export interface WinnerByYear {
  id?: number;
  year?: number;
  title?: string;
  studios?: Array<string>;
  producers?: Array<string>;
  winner?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  fetchAllMovies() {
    return new Promise((resolve) => {
      this.http
        .get(`${BASE_URL}?page=1&size=99`)
        .subscribe((data) => resolve(data));
    });
  }

  fetchYearsWithMultpleWinners() {
    return new Promise<YearWithMultipleWinner>((resolve) => {
      this.http
        .get(`${BASE_URL}?projection=years-with-multiple-winners`)
        .subscribe((data) => resolve(data as YearWithMultipleWinner));
    });
  }

  fetchWinnerSudios() {
    return new Promise<StudioWithWinCount>((resolve) => {
      this.http
        .get(`${BASE_URL}?projection=studios-with-win-count`)
        .subscribe((data) => resolve(data as StudioWithWinCount));
    });
  }

  fetchProducersIntervalBetweenWin() {
    return new Promise<StudioIntervalBetweenWin>((resolve) => {
      this.http
        .get(`${BASE_URL}?projection=max-min-win-interval-for-producers`)
        .subscribe((data) => resolve(data as StudioIntervalBetweenWin));
    });
  }

  fetchMovieByYear(winner: boolean, year?: number) {
    return new Promise<Array<WinnerByYear>>((resolve) => {
      this.http
        .get(`${BASE_URL}?winner=${winner}&year=${year}`)
        .subscribe((data) => resolve(data as Array<WinnerByYear>));
    });
  }
}
