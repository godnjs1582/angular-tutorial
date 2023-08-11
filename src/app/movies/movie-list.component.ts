import { Component, OnInit } from "@angular/core";
import { IMovie }from "./movie.model"
import { MovieService } from "./movie.service";

@Component({
    selector:"app-movie",
    templateUrl:"./movie-list.component.html",
    styleUrls:["./movie-list.component.scss"],
    providers:[MovieService]
})
export class MovieListComponent implements OnInit{

    constructor(private movieService:MovieService){

    }
    subTitle:string="영화리스트";
    imageWidth:number=55;
    imageMargin:number=2;
    isImageDisplayed:boolean=false;
    movies:IMovie[]=[]
    private _filterText="";

    get filterText():string{
        return this._filterText;
    }
    set filterText(v:string){
        this._filterText=v;
        this.filteredMovies=this.performFilter(v)
    }

    public performFilter(filterBy:string):IMovie[]{
        filterBy=filterBy.toLocaleLowerCase();
        return this.movies.filter((movie:IMovie)=>{
            return movie.name.toLocaleLowerCase().includes(filterBy)
        })
    }
    filteredMovies:IMovie[]=[];

    public ngOnInit(): void {
        this.movies=this.movieService.getMovies();
        this.filteredMovies=this.movies;
    }
    public toggleImage():void{
        this.isImageDisplayed=!this.isImageDisplayed;
    };

    public callFromStar(rating:number){
        console.log("from star:",rating)
    }
}