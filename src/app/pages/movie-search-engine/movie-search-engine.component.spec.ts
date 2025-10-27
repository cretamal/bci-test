import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchEngineComponent } from './movie-search-engine.component';

describe('MovieSearchEngineComponent', () => {
  let component: MovieSearchEngineComponent;
  let fixture: ComponentFixture<MovieSearchEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
