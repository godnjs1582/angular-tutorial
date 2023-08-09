import { Component, OnInit } from "@angular/core";
import { IMovie }from "./movie.model"

@Component({
    selector:"app-movie",
    templateUrl:"./movie-list.component.html",
    styleUrls:["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit{
    subTitle:string="영화리스트";
    imageWidth:number=55;
    imageMargin:number=2;
    isImageDisplayed:boolean=false;
    filterText:string="";
    movies:IMovie[]=[
        {
            "movieId":1,
            "name":"matrix4",
            "director":"aa",
            "releaseDate":"2022-01-10",
            "actor":"Keanu Reeves",
            "rate":4,
            "imageUrl":"/assets/images/matrix4.jpeg",
        },
        {
            "movieId":2,
            "name":"spider-man:No Way Home",
            "director":"aa",
            "releaseDate":"2022-01-17",
            "actor":"tom holland",
            "rate":3,
            "imageUrl":"",
        },
    ]

    public ngOnInit(): void {
        console.log("앵귤러 라이프 사이클:ngOnInit()")
    }
    public toggleImage():void{
        this.isImageDisplayed=!this.isImageDisplayed;
    };
}