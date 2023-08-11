import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarScoreComponent } from './star-score.component';
import { ConvertPipe } from './convert.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarScoreComponent, ConvertPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarScoreComponent, ConvertPipe, CommonModule, FormsModule
  ]
})
export class SharedModule { }
