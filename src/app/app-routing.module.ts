import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { MovieSearchEngineComponent } from './pages/movie-search-engine/movie-search-engine.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // ruta vacía -> home
  { path: 'home', component: MovieSearchEngineComponent },
  { path: '**', redirectTo: 'home' } // cualquier otra ruta -> home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
