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

  onFavoriteChange(eventArgs: { newValue: FavoriteChangeEventArgs }) {
    console.log("favorite change to: ", eventArgs);
  }
}
