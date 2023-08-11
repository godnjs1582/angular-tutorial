import { Injectable } from "@angular/core";
import { IMovie } from "./movie.model";

@Injectable({
    providedIn:'root'
})
export class MovieService{
    getMovies():IMovie[]{
        return [
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
    }
}