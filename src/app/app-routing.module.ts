import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'movies', component: AllMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
