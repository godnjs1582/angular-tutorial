import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>{{20*2+1}}</h1>
    <app-movie></app-movie>
  </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'MovieList';
}
