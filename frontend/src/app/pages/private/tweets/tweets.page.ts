import { Component, OnInit } from '@angular/core';
import { SocketIOService } from '@app/@core/services/socketio';
import { removeItemArray } from '@app/@core/utils/array.utils';
import { BehaviorSubject, interval, Observable, Subject, Subscription } from 'rxjs';
import { TweetService } from './_services/tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.page.html',
  styleUrls: ['./tweets.page.scss']
})
export class TweetsComponent implements OnInit {

  private _tweets$!: Observable<any>;
  public tweets: Array<any> = [];
  public aprovedTweets: Array<any> = [];
  public tabTweets = true;
  public currentTweet$ = new BehaviorSubject<any>(null);
  private subscription!: Subscription;
  public choosedHashtag: any = ``;
  public editTodayHashtag: boolean = true;
  public mostPopularHashtag: any = `#`;

  constructor(private socketIoService: SocketIOService, private service: TweetService) { }


  ngOnInit() {

    const source = interval(6000);

    this.subscription = source.subscribe(val => this.realtime());

    this.hashtagControl();
  }


  ngOnDestroy() {
    // For method 1
    this.subscription && this.subscription.unsubscribe();
    this.socketIoService.disconnectTweet();
  }

  realtime() {
    this.currentTweet$.next(null)
    if (this.aprovedTweets.length > 0) {
      this.currentTweet$.next((this.aprovedTweets[0]));
      this.aprovedTweets.shift();
    }
  }

  changeTab(tab: string) {
    if (tab == 'tabTweets') {
      this.tabTweets = true;
    } else {
      this.tabTweets = false;
    }
  }

  editarHashtag() {
    this.editTodayHashtag = true;
  }

  editHashtag() {
    this.choosedHashtag = this.mostPopularHashtag;
    this.service.removeCookie();
    this.hashtagControl();
    this.editTodayHashtag = false;
  }


  hashtagControl() {

    this.tweets = []
    this.aprovedTweets = []


    if (!this.service.getCookie()) {
      this.service.storeCookieHashtag(this.choosedHashtag);
      this.editTodayHashtag = true;
    } else {
      this.choosedHashtag = this.service.getCookie();
      this.mostPopularHashtag = this.choosedHashtag;
      this.editTodayHashtag = false;
    }

    this.socketIoService.connect();

    this._tweets$ = this.socketIoService.recieveTweets(this.choosedHashtag);
      this._tweets$.subscribe({
        next: (item) => {
          if (this.tweets.filter(tweet => tweet.id == item.id).length == 0)
            this.tweets.push(item);
        }
      });
  }

  cancel() {
    this.editTodayHashtag = false;
  }





}
