import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstant } from '../../../shared/constant/urlConst';
@Injectable({
    providedIn: 'root'
})

export class HomeService {
    constructor(private http: HttpClient) { }

    getMatches() {
        return this.http.get<any>(urlConstant.MatchAPI.getMatches);
    }
}