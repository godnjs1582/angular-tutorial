import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { StarScoreComponent } from '../shared/star-score.component';
import { ConvertPipe } from '../shared/convert.pipe';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { movieDetailGuard } from './movie-detail/movie-detail.guard';



@NgModule({
  declarations: [
    MovieListComponent,
    StarScoreComponent,
    ConvertPipe,
    MovieDetailComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild([
      {path:"movies",component:MovieListComponent},
      {path:"movies/:id",canActivate:[movieDetailGuard],component:MovieDetailComponent}
    ])
  ]
})
export class MovieModule { }
