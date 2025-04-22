import { Routes } from "@angular/router";
import { HomeComponent } from "../../components/pages/home/home.component";
import { MatchDetailComponent } from "../../components/pages/match-detail/match-detail.component";
import { BookingSummaryComponent } from "../../components/pages/booking-summary/booking-summary.component";
import { PaymentComponent } from "../../components/payment/payment.component";
export const routing: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
    }, {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'BOOK MY SHOW - Home Page',
            description: ''
        }
    }, {
        path: 'match-detail/:id',
        component: MatchDetailComponent,
        data: {
            title: 'BOOK MY SHOW - IPL Match Detail',
            description: ''
        }
    }, {
        path: 'booking-summary/:matchId/:qty/:typeId',
        component: BookingSummaryComponent,
        data: {
            title: 'BOOK MY SHOW - IPL Ticket Booking Summary',
            description: ''
        }
    }, {
        path: 'payment',
        component: PaymentComponent,
        data: {
            title: 'BOOK MY SHOW - Payment',
            description: ''
        }
    }, {
        path: '**',
        component: HomeComponent
    },
]