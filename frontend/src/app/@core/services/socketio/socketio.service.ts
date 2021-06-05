import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { environment } from '../../../../environments/environment';
import { io, Socket } from 'socket.io-client';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  socket!: Socket;

  constructor() { }

  connect() {
    this.socket = io(environment.socketApiUrl);
  }

  recieveTweets(hashtag: string) {
     this.socket.emit('twitter', hashtag.replace('#', ''));



    return new Observable((observer: any) => {
      this.socket.on('tweet', (message) => {
        console.log(message)
        observer.next(message);
      });
    });
  }


  disconnectTweet() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket.emit('tweetEnd')
    }
  }

}


