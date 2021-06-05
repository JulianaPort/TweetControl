import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetsComponent } from './tweets.page';
import { TweetService } from './_services/tweet.service';
import { SocketIOService } from '@app/@core/services/socketio';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BoxModule } from '@app/components/box/box.module';
import { HashtagModule } from '@app/@core/directives/hashtag/hashtag.module';
import { TweetBoxComponent } from './components/tweet-box/tweet-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BoxModule,
    HashtagModule,
    RouterModule.forChild([
      {
        path: '',
        component: TweetsComponent
      },
    ]),
  ],
  declarations: [TweetsComponent, TweetBoxComponent],
  providers:[],

})
export class TweetsModule {


}
