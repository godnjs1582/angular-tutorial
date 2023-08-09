import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertPipe } from './shared/convert.pipe';
import { StarScoreComponent } from './shared/star-score.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ConvertPipe,
    StarScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
