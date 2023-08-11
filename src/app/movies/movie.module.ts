import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { movieDetailGuard } from './movie-detail/movie-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild([
      {path:"movies",component:MovieListComponent},
      {path:"movies/:id",canActivate:[movieDetailGuard],component:MovieDetailComponent}
    ]),
    SharedModule
  ]
})
export class MovieModule { }
