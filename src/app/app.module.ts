import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { YearsWinnersComponent } from './years-winners/years-winners.component';
import { StudiosWinsComponent } from './studios-wins/studios-wins.component';
import { ProducersIntervalWinComponent } from './producers-interval-win/producers-interval-win.component';
import { WinnerByYearComponent } from './winner-by-year/winner-by-year.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AllMoviesComponent,
    YearsWinnersComponent,
    StudiosWinsComponent,
    ProducersIntervalWinComponent,
    WinnerByYearComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
