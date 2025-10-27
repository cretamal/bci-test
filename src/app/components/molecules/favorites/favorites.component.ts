import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites:any = [];
  
  constructor(
    private readonly favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this.favoritesService.favorites$.subscribe((favs:any) => {
      this.favorites = favs;
      console.log('this.favorites::::', this.favorites);
    });
  }

}
