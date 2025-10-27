import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditMovieComponent } from './modal-edit-movie.component';

describe('ModalEditMovieComponent', () => {
  let component: ModalEditMovieComponent;
  let fixture: ComponentFixture<ModalEditMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
