import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { WelcomeComponent } from './movies/welcome/welcome.component';
import { movieDetailGuard } from './movies/movie-detail/movie-detail.guard';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
