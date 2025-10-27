import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class FavoritesService {

  private readonly STORAGE_KEY = 'favorites';
  private favoritesSubject: BehaviorSubject<any[]>;
  public favorites$: Observable<any[]>;

  constructor() {
    localStorage.removeItem('favorites'); // limpiar data inicial

    const stored = localStorage.getItem(this.STORAGE_KEY);
    const initialFavorites = stored ? JSON.parse(stored) : [];

    this.favoritesSubject = new BehaviorSubject<any[]>(initialFavorites);
    this.favorites$ = this.favoritesSubject.asObservable();
  }

  // Lista actual
  getFavorites(): any[] {
    return this.favoritesSubject.getValue();
  }

  // Add Eliminar favoritos
  addFavorite(item: any): Observable<boolean> {
    const current = this.getFavorites();
    const exists = current.some(fav => fav.id === item.id);

    const updated = exists
      ? current.filter(fav => fav.id !== item.id)
      : [...current, item];

    this.updateFavorites(updated);

    return Observable.of(!exists);
  }

  // Eliminar favorito por id
  removeFavorite(itemId: string): void {
    const current = this.getFavorites();
    const updated = current.filter(fav => fav.id !== itemId);
    this.updateFavorites(updated);
  }

  clearFavorites(): void {
    this.updateFavorites([]);
  }

  updateFavorite(updatedItem: any): Observable<any> {
    const current = this.getFavorites();
    const updated = current.map(fav =>
      fav.id === updatedItem.id ? { ...fav, ...updatedItem } : fav
    );

    this.updateFavorites(updated);
    return Observable.of(updatedItem);
  }
  
  private updateFavorites(updated: any[]): void {
    this.favoritesSubject.next(updated);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
  }
}
