import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import parseTweet from 'parse-tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet: object;

  constructor() { }

  parse() {
    return parseTweet(this.tweet);
  }

  ngOnInit() {
  }

}
