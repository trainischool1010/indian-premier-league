import { Component, OnInit } from '@angular/core';
import { MatchDetailService } from './match-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrl: './match-detail.component.scss'
})
export class MatchDetailComponent implements OnInit{
  selectedType : any = null;
  quantity : number = 1;

  matchId : any;

  matchData : any = null;

  ticketTypeList : any[] = [];

  constructor(private matchdetailservice : MatchDetailService, private router : Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.matchId = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe(params => {
      this.matchId = params.get('id');
      if(Number(this.matchId)){
        this.getMatchDetail();
      }
    });


    this.getTickettype();
  }

  getMatchDetail(){
    this.matchdetailservice.getMatchDetail(this.matchId).subscribe((res : any) => {
      if(res && res.data.length){
        this.matchData = res.data[0];
      }else{
        this.router.navigate(['/']);
      }
    }, err => {
      this.router.navigate(['/']);
    })
  }
  getTickettype(){
    this.matchdetailservice.getTickettype().subscribe((res : any) => {
      if(res){
        this.ticketTypeList = res.data;
        this.selectedType = this.ticketTypeList[0];
      }
    })
  }

  procced(){
    this.router.navigate([`/booking-summary/${this.matchId}/${this.quantity}/${this.selectedType.id}`]);
  }

}
