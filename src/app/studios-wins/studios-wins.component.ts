import { Component, OnInit } from '@angular/core';
import { MoviesService, StudioWithWinCountData } from '../movies.service';

@Component({
  selector: 'app-studios-wins',
  templateUrl: './studios-wins.component.html',
  styleUrls: ['./studios-wins.component.css']
})
export class StudiosWinsComponent implements OnInit {
  
  studiosDisplayedColumns: string[] = ['name', 'winCount'];
  studiosWithWinCountDataSource: Array<StudioWithWinCountData> = [];

  constructor(private moviesService: MoviesService) { }

  async ngOnInit(): Promise<void> {
    this.studiosWithWinCountDataSource = (
      await this.moviesService.fetchWinnerSudios()
    )?.studios;
  }

}
