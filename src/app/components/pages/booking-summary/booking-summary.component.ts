import { Component, OnInit } from '@angular/core';
import { MatchDetailService } from '../match-detail/match-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.scss'
})
export class BookingSummaryComponent implements OnInit {
  selectedType: any = null;
  quantity: number = 1;

  matchId: any;
  qty: any;
  typeId: any;

  phone : any;

  matchData: any = null;

  ticketTypeList: any[] = [];

  gst : number = 0;
  total : number = 0;

  constructor(private matchdetailservice: MatchDetailService, public sharedservice: SharedService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.matchId = this.route.snapshot.paramMap.get('matchId');    
    this.qty = this.route.snapshot.paramMap.get('qty');    
    this.typeId = this.route.snapshot.paramMap.get('typeId');    
    this.getMatchDetail();

    this.route.paramMap.subscribe(params => {
      this.matchId = params.get('matchId');
      this.qty = params.get('qty');
      this.typeId = params.get('typeId');
      if (Number(this.matchId)) {
        this.getMatchDetail();
      }
    });

    this.getTickettype();
  }

  getMatchDetail() {
    this.matchdetailservice.getMatchDetail(this.matchId).subscribe((res: any) => {
      if (res && res.data.length) {
        this.matchData = res.data[0];
      } else {
        // this.router.navigate(['/']);
      }
    }, err => {
      // this.router.navigate(['/']);
    })
  }
  getTickettype() {
    this.matchdetailservice.getTickettype().subscribe((res: any) => {
      if (res) {
        this.ticketTypeList = res.data;
        this.selectedType = this.ticketTypeList.find(e => e.id == this.typeId);
        this.gst = (((this.selectedType?.amt || 1)*this.qty)*18)/100;
        this.total = ((this.selectedType?.amt || 1)*this.qty)+this.gst+this.sharedservice.defaultData.serviceCharge;
      }
    })
  }

  procced() {
    localStorage.setItem('fdskjgdfshjdfs',String(this.total));
    this.router.navigate([`/payment`]);
  }

}