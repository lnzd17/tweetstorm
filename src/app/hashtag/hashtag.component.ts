import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  tweets: any[] = [];
  constructor(private route: ActivatedRoute, private service: TweetsService) { }
  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.service.getHashtagTweets(params['hashtag']).subscribe((tweets) => {
         this.tweets = tweets.statuses;
      });
    });
  }
}
