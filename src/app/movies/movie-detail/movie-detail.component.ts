import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  title:string="Movie Detail";

  constructor(private route:ActivatedRoute, private router:Router){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.title +=`:${id}`
  }

  goToList():void{
    this.router.navigate(["/movies"])
  }
}
