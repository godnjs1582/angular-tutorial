import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './movies/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieModule } from './movies/movie.module';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',component:WelcomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
