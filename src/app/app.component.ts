import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  examples
  canSave = true; 

  viewMode = 'map';
  courses = [1,2];
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: "Here is the body of tweet...",
    isLiked: true,
    likesCount: 40
  }

  task = {
    title: 'Review application',
    assignee: null
  }

  onFavoriteChange(eventArgs: { newValue: FavoriteChangeEventArgs }) {
    console.log("favorite change to: ", eventArgs);
  }

  onAdd() {
    this.examples.push( {id: 4, name: 'example 4'});
  }

  onRemove(example) {
    let index = this.examples.indexOf(example);
    this.examples.splice(index, 1);
  }

  onChange(example) {
    example.name = 'UPDATED';
  }

  loadExamples() {
    this.examples = [
      {id: 1, name: 'example 1 '},
      {id: 2, name: 'example 2 '},
      {id: 3, name: 'example 3 '},
    ];
  }

  trackExample(index, example){
    return example ? example.id : undefined;
  }
}
