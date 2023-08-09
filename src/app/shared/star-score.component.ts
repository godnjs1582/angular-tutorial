import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-star-score',
    templateUrl:"./star-score.component.html",
    styleUrls:["./star-score.component.scss"]
})

export class StarScoreComponent implements OnChanges{
    @Input() rating:number=4;
    @Output() call:EventEmitter<number>= new EventEmitter();
    cropWidth:number=75;

    ngOnChanges(): void {
        console.log('onChange');
        this.cropWidth=this.rating*75/5;
    }
    starClick():void{
        this.call.emit(this.rating)
    }
}