import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{
  
  selectedPaymentMethod : string = null;
  amt : any;

  constructor(public sharedservice: SharedService,  private router: Router){}

  ngOnInit(): void {
    if(localStorage.getItem('fdskjgdfshjdfs')){
      this.amt = localStorage.getItem('fdskjgdfshjdfs');
    }else{
      this.router.navigate(['/'])
    }
  }
  
  selectUPI(method : string){
    this.selectedPaymentMethod = method;
  }

  openURLNewTab() {
    if(this.selectedPaymentMethod == 'phonepe'){
      let url = `phonepe://pay?ver=01&mode=19&pa=${this.sharedservice.defaultData.upiId}&am=${this.amt}&pn=BookMyShow&tr=TG8X78U3P7&cu=INR&mc=5942&qrMedium=04&tn=TICKET%20ID%20:%20RCRGaATkQwYEyT`
      window.open(url, '_blank');
    }
    if(this.selectedPaymentMethod == 'paytm'){
      let url = `paytmmp://pay?ver=01&mode=19&pa=${this.sharedservice.defaultData.upiId}&am=${this.amt}&pn=BookMyShow&tr=TP6VUNMUQ2&cu=INR&mc=5942&qrMedium=04&tn=TICKET%20ID%20:%20RCRGaATkQwYEyT`
      window.open(url, '_blank');
    }
    if(this.selectedPaymentMethod == 'gpay'){
      let url = `phonepe://pay?ver=01&mode=19&pa=${this.sharedservice.defaultData.upiId}&am=${this.amt}&pn=BookMyShow&tr=TG8X78U3P7&cu=INR&mc=5942&qrMedium=04&tn=TICKET%20ID%20:%20RCRGaATkQwYEyT`
      window.open(url, '_blank');
    }
    if(this.selectedPaymentMethod == 'other'){
      let url = `upi://pay?ver=01&mode=19&pa=${this.sharedservice.defaultData.upiId}&am=${this.amt}&pn=BookMyShow&tr=T4WWFL01RF&cu=INR&mc=5942&qrMedium=04&tn=TICKET%20ID%20:%20RCRGaATkQwYEyT`
      window.open(url, '_blank');
    }
  }

}