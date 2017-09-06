import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';

import { RouterModule, Routes } from '@angular/router';
import { TweetsService } from './tweets.service';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetComponent } from './tweet/tweet.component';
import { FormsModule }   from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'hashtag/:hashtag', component: HashtagComponent},
  { path: 'user/:username', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    MainPageComponent,
    TweetListComponent,
    TweetComponent,
    SearchbarComponent,
    HashtagComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TweetsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
