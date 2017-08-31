import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  tweets: any[] = [];

  constructor(private service: TweetsService) { }

  ngOnInit() {
    this.service.getTweets("Angular").subscribe( (tweets) => {
        this.tweets = tweets.statuses;
    });
  }


}
