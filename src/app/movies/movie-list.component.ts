import { Component, OnInit, OnDestroy } from "@angular/core";
import { IMovie }from "./movie.model"
import { MovieService } from "./movie.service";
import { Subscription } from "rxjs";

@Component({
    selector:"app-movie",
    templateUrl:"./movie-list.component.html",
    styleUrls:["./movie-list.component.scss"],
    providers:[MovieService]
})
export class MovieListComponent implements OnInit, OnDestroy{
    
    subTitle:string="영화리스트";
    imageWidth:number=55;
    imageMargin:number=2;
    isImageDisplayed:boolean=false;
    
    subscription!:Subscription;

    private _filterText="";

    movies:IMovie[]=[]
    filteredMovies:IMovie[]=[];
  
    constructor(private movieService:MovieService){

    }
    
 

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
   

    public ngOnInit(): void {
        this.subscription = this.movieService.getMovies().subscribe({
            next:(data)=>{
                this.movies=data;
                this.filteredMovies=this.movies;
            },
            error:(error)=>console.log(error),
            complete:()=>console.log("complete")
        })
        // this.movies=this.movieService.getMovies();
        this.filteredMovies=this.movies;
    }
    public toggleImage():void{
        this.isImageDisplayed=!this.isImageDisplayed;
    };

    public callFromStar(rating:number){
        console.log("from star:",rating)
    }

    public ngOnDestroy():void{
        this.subscription.unsubscribe();
    }
}