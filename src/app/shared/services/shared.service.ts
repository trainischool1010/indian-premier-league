import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})


export class SharedService {
    isShowPreloader : boolean = false;
    isLogin : boolean = false;
    defaultData : any;
    userData : any;
    ip : string;

    deviceWidth: number;
    deviceHeight: number;

    constructor(private router: Router, private http: HttpClient, private toastr: ToastrService){}
    

    showAlert(type: number, title: string, message?: string) {        
        if (type == 1) {
            this.toastr.success(title, message ? message : '', {
                enableHtml: true,
                progressBar: true,
                positionClass: 'toast-bottom-right'
            });
        } else if (type == 2) {
            this.toastr.warning(title, message ? message : '', {
                enableHtml: true,
                progressBar: true,
                positionClass: 'toast-bottom-right'
            });
        } else if (type == 3) {
            this.toastr.error(title, message ? message : '', {
                enableHtml: true,
                progressBar: true,
                positionClass: 'toast-bottom-right'
            });
        } else if (type == 4) {
            this.toastr.info(title, message ? message : '', {
                enableHtml: true,
                progressBar: true,
                positionClass: 'toast-bottom-right'
            });
        }
    }
    copyText(val: string) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    openURLNewTab(url) {
        window.open(url, '_blank');
    }
    
    shareUrlToSocial(platform_name, url) {
        let shareUrl = '';

        switch (platform_name.toLowerCase()) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
                break;
            case 'reddit':
                shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=Check this out!`;
                break;
            default:
                this.showAlert(2, 'Unsupported Platform');
                return;
        }

        window.open(shareUrl, '_blank');
    }
}