import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertPipe } from './shared/convert.pipe';
import { StarScoreComponent } from './shared/star-score.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { WelcomeComponent } from './movies/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ConvertPipe,
    StarScoreComponent,
    MovieDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
