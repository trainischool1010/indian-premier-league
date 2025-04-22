import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  matchList : any[] = [];

  constructor( private homeservice : HomeService){}

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches(){
    this.homeservice.getMatches().subscribe((res : any) => {
      if(res){
        this.matchList = res.data;
      }
    })
  }

}
