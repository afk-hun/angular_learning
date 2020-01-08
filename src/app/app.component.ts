import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: "Here is the body of tweet...",
    isLiked: true,
    likesCount: 40
  }

  onFavoriteChange(eventArgs: { newValue: FavoriteChangeEventArgs }) {
    console.log("favorite change to: ", eventArgs);
  }
}
