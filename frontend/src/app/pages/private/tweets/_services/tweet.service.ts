import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/@core/models/User';
import { CookieService } from '@app/@core/services/cookie/cookie.service';
import { SocketIOService } from '@app/@core/services/socketio';
import { TwitterService } from '@app/@core/services/twitter/twitter.service';
import { getItem, removeItem, setItem, StorageItem } from '@app/@core/utils';
import { environment } from '@environments/environment';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TweetService {

  constructor(private twitterService: TwitterService, private cookieService: CookieService) { }

  getTrends(): Observable<any> {
    return this.twitterService.getTrends();
  }

  storeCookieHashtag(hashtag: string) {
    this.cookieService.setCookie('hashtagDay', hashtag, 1)
  };

  getCookie() {
    return this.cookieService.getCookie('hashtagDay');
  }

  removeCookie() {
    this.cookieService.deleteCookie('hashtagDay');
  }
}
