import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { removeItemArray } from '@app/@core/utils/array.utils';


@Component({
  selector: 'tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.scss']
})
export class TweetBoxComponent implements OnInit {

  @Input() inpTweetlist: Array<any> = [];
  @Input() inptNeedsAprove: boolean = true;
  @Input() inptNeedsActions: boolean = true;
  @Output() aprovedTweetChange = new EventEmitter<Array<any>>();


  tweetlist : Array<any> = [];

  private aproovedTweets : Array<any> = [];

  constructor() { }

  ngOnChanges(){
    this.tweetlist = this.inpTweetlist;
  }

  ngOnInit() {
  }

  approveTweet(tweet: any) {
    this.aproovedTweets.push(tweet);
    this.tweetlist = removeItemArray(this.tweetlist, 'id', tweet.id);
    this.aprovedTweetChange.emit(this.aproovedTweets);
  }

  reproveTweet(tweet: any, isTweetAproved?: boolean) {
    if (isTweetAproved)
      this.aproovedTweets = removeItemArray(this.aproovedTweets, 'id', tweet.id);
    else
      this.tweetlist = removeItemArray(this.tweetlist, 'id', tweet.id);
  }


}
