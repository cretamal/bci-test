import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { MovieSearchEngineComponent } from './pages/movie-search-engine/movie-search-engine.component'

const routes: Routes = [
  { path: 'home', component: MovieSearchEngineComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
