import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  movies: any = Observable<{}>;

  constructor(private moviesService: MoviesService) { }

  async ngOnInit(): Promise<void> {
    const result = await this.moviesService.fetchAllMovies();

    console.log(result);
  }

}
