import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { MatDialog } from '@angular/material';
import { ModalEditMovieComponent } from '../modal-edit-movie/modal-edit-movie.component';
import { Observable } from 'rxjs';
import { combineLatest, map } from 'rxjs/operators';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  movies:any = [];
  movies$: Observable<any[]>;

  constructor(
    private readonly moviesService: MoviesService,
    private readonly favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.getDataMovies();
  }

  getDataMovies() {
    // init carga
    this.moviesService.getMovies().subscribe();

    // Combina peliculas/favoritos
    this.movies$ = Observable.combineLatest(
      this.moviesService.movies$,
      this.favoritesService.favorites$
    )
    .map(([movies, favorites]) => {
      const favIds = (favorites || []).map(f => f.id);
      const validMovies = (movies || [])
      // .slice(1).filter(movie => movie.thumbnails && movie.thumbnails.length > 0);
      // Add isFavorite
      return validMovies.map(movie => ({
        ...movie,
        isFavorite: favIds.includes(movie.id)
      }));
    });
  }

  loadMore() {
    this.moviesService.nextPage();
  }

  loadPrevious() {
    this.moviesService.previousPage();
  }


}