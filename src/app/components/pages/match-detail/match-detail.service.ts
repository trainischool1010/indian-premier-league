import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlConstant } from '../../../shared/constant/urlConst';
@Injectable({
    providedIn: 'root'
})

export class MatchDetailService {
    constructor(private http: HttpClient) { }

    getTickettype() {
        return this.http.get<any>(urlConstant.TickettypeAPI.getTickettype);
    }
    getMatchDetail(id) {
        return this.http.get<any>(urlConstant.MatchAPI.getMatchDetail+id);
    }
}