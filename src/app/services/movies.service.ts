import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService {
  private url = environment.PROTOCOL + environment.HOST + environment.API;

  // Estado reactivo
  private moviesSubject = new BehaviorSubject<any[]>([]);
  public movies$ = this.moviesSubject.asObservable();

  // Control de paginación
  private allMovies: any[] = []; // cache local
  private currentPage = 1;
  private readonly pageSize = 12;

  private genreSubject = new BehaviorSubject<string>('');
  genre$ = this.genreSubject.asObservable();

  

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.loadMovies();
  }

  loadMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}imdb/top250-movies`).pipe(
      tap((movies) => {
        this.allMovies = movies;
        this.currentPage = 1;
        this.emitCurrentPage();
      })
    );
  }

  getCurrentMovies(): any[] {
    return this.moviesSubject.getValue();
  }

  updateMovie(updatedMovie: any): void {    
    const indexAll = this.allMovies.findIndex((m) => m.id === updatedMovie.id);
    if (indexAll !== -1) {
      this.allMovies[indexAll] = { ...this.allMovies[indexAll], ...updatedMovie };
    }

    const currentMovies = this.getCurrentMovies();
    const indexCurrent = currentMovies.findIndex((m) => m.id === updatedMovie.id);
    if (indexCurrent !== -1) {
      currentMovies[indexCurrent] = { ...currentMovies[indexCurrent], ...updatedMovie };
      this.moviesSubject.next([...currentMovies]);
    }
  }


  nextPage(): void {
    const totalPages = Math.ceil(this.allMovies.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.emitCurrentPage();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.emitCurrentPage();
    }
  }

  private emitCurrentPage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    const pageData = this.allMovies.slice(start, end);
    this.moviesSubject.next(pageData);
  }

  getGenres(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/genres.json');
  }

  setGenre(genre: string) {
    this.genreSubject.next(genre);
  }

}
