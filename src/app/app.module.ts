import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSearchEngineComponent } from './pages/movie-search-engine/movie-search-engine.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';


// ATOMS / MOLECULES ::::::::::::::::::::::::::::::::::::::::::::::::::::::
import { TextComponent } from './components/atoms/text/text.component';
import { CardComponent } from './components/molecules/card/card.component';


// MATERIAL ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { ListItemsComponent } from './components/molecules/list-items/list-items.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';


import { MoviesService } from './services/movies.service';
import { TextWrapperPipe } from './pipes/pipes/text-wrapper.pipe';
import { ParseDatePipe } from './pipes/parseDate.pipe';
import { FavoritesService } from './services/favorites.service';
import { FavoritesComponent } from './components/molecules/favorites/favorites.component';
import { HeaderTopComponent } from './components/molecules/header-top/header-top.component';
import { ModalEditMovieComponent } from './components/molecules/modal-edit-movie/modal-edit-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieSearchEngineComponent,
    TextComponent,
    ListItemsComponent,
    CardComponent,
    TextWrapperPipe,
    FavoritesComponent,
    HeaderTopComponent,
    ModalEditMovieComponent,
    ParseDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    MoviesService,
    FavoritesService,
    ParseDatePipe
  ],
  entryComponents: [
    ModalEditMovieComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
