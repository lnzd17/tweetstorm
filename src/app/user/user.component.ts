import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  userData: object;
  profile_banner_url: string;
  profile_image_url: string;
  tweets: number;
  following: number;
  followers: number;
  likes: number;
  lists: number;
  name: string;
  description: string;
  location: string;
  joined: string;
  latest_tweet: object;

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.username = params['username'];
      this.service.getUser(this.username).subscribe( (userData) => {
        this.userData = userData;
        const placeholder_banner = '/assets/twitter-logo-banner.jpg';
        this.profile_banner_url = userData.profile_banner_url ? userData.profile_banner_url : placeholder_banner;
        this.profile_image_url = userData.profile_image_url;
        this.tweets = userData.statuses_count ? userData.statuses_count : 0;
        this.following = userData.friends_count ? userData.friends_count : 0;
        this.followers = userData.followers_count ? userData.followers_count : 0;
        this.likes = userData.favourites_count ? userData.favourites_count : 0;
        this.lists = userData.listed_count ? userData.listed_count : 0;
        this.name = userData.name;
        this.description = userData.description
        this.location = userData.location ? userData.location : 'Planet Earth';
        this.joined = userData.created_at;
        this.latest_tweet = userData.status;
      });
    });
  }

}
