import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  tweets: any[] = [];

  constructor(private service: TweetsService) { }

  ngOnInit() {
    const query = localStorage.getItem("lastQuery") || "Angular";
    this.service.getTweets(query).subscribe( (tweets) => {
        this.tweets = tweets.statuses;
    });
  }

  search = (keyword: string) => {
    localStorage.setItem("lastQuery", keyword);
    this.service.getTweets(keyword).subscribe( (tweets) => {
      this.tweets = tweets.statuses;
    });
  }


}
