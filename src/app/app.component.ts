import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SharedService } from './shared/services/shared.service';
import { filter } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { DefaultAPIService } from './shared/services/default-api.service';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedservice: SharedService,
    private metaService: Meta,
    private titleService: Title,
    private defaultapiservice : DefaultAPIService,
    private router: Router
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url) {
          console.log('event.url --->',event.url);
        }
      }
    });
  }

  ngAfterViewInit(): void {
    register();
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  ngOnInit(): void {
    this.onResize(null);
    this.defaultapiservice.getSite().subscribe((res : any) => {
      if(res){
        this.sharedservice.defaultData = res.data[0];
      }
    })
    // --------------------- Update Meta Title and Description Route Wise -------- Start
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt = this.getChild(this.activatedRoute);
      rt.data.subscribe(data => {
        if (data) {
          this.titleService.setTitle(data.title);
          this.metaService.updateTag({ name: 'description', content: data.description });
        }
      });
    });
    // --------------------- Update Meta Title and Description Route Wise -------- End
  }
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event) {
      this.sharedservice.deviceWidth = event.target.innerWidth;
      this.sharedservice.deviceHeight = event.target.innerHeight;
    } else {
      this.sharedservice.deviceWidth = window.innerWidth;
      this.sharedservice.deviceHeight = window.innerHeight;
    }
  };
}
