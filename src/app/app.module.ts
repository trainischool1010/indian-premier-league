import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { OnlyNumberDirective } from './shared/directive/only-number.directive';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home/home.component';
import { MatchDetailComponent } from './components/pages/match-detail/match-detail.component';
import { BookingSummaryComponent } from './components/pages/booking-summary/booking-summary.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    MatchDetailComponent,
    BookingSummaryComponent,
    PaymentComponent
  ],
  imports: [
    OnlyNumberDirective,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgbModule,
    NgbTooltip,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
