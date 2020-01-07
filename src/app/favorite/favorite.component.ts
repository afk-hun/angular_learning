import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;

  constructor() { this.isFavorite = false; }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
