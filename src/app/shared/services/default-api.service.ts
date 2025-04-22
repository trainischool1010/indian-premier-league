import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstant } from '../constant/urlConst';

@Injectable({
    providedIn: 'root'
})


export class DefaultAPIService {
    constructor(private http: HttpClient) { }

    getIpAddress() {
        return this.http.get('https://api.ipify.org/?format=json');
    }
    getSite() {
        return this.http.get(urlConstant.SiteConfigAPI.getSiteConfig);
    }
}