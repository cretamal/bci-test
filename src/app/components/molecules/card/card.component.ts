import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';
import { ModalEditMovieComponent } from '../modal-edit-movie/modal-edit-movie.component';
import { MatDialog } from '@angular/material';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() DataCard:any;
  addedMovies: Set<string> = new Set();


  constructor(
    private readonly favoritesService: FavoritesService,
    private readonly moviesService: MoviesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {}

  openDialog(movie: any): void {
  const dialogRef = this.dialog.open(ModalEditMovieComponent, {
    width: '630px',
    data: { ...movie }
  });

  dialogRef.afterClosed().subscribe((updated) => {
    if (updated) {
      // fav
      this.favoritesService.updateFavorite(updated).subscribe();
      // original
      this.moviesService.updateMovie(updated);
      // current card
      Object.assign(this.DataCard, updated);
    }
  });
}

  addFav(movie:any){
    this.favoritesService.addFavorite(movie).subscribe(added => {
       if (added) {
        this.addedMovies.add(movie.id); // Add
      } else {
        this.addedMovies.delete(movie.id); // Remove
      }
    });
  }

  isAdded(movieId: string): boolean {
    return this.addedMovies.has(movieId);
  }

}
