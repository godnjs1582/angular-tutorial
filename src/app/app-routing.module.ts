import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { WelcomeComponent } from './movies/welcome/welcome.component';

const routes: Routes = [
  {path:'movies', component:MovieListComponent},
  {path:'movies/:id',component:MovieDetailComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
