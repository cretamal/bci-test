import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ParseDatePipe } from '../../../pipes/parseDate.pipe';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-modal-edit-movie',
  templateUrl: './modal-edit-movie.component.html',
  styleUrls: ['./modal-edit-movie.component.scss']
})
export class ModalEditMovieComponent implements OnInit {
  loadData:boolean = false;
  // ::::::: Formulario :::::::::::::
    submitted: boolean = false; // Flag que indica si el formulario ha sido enviado
    formData: any = FormGroup; // Objeto FormGroup que contiene la estructura del formulario
  // ::::::: Fin del formulario :::::::::::::::::

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalEditMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parseDatePipe: ParseDatePipe,
    private readonly favoritesService: FavoritesService
  ) {
    this.prepareForm();
  }  
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    // console.log('Data edit modal::', this.data);    
  }

  prepareForm() {
    this.formData = this.formBuilder.group({
      name: [''],
      releaseDate: [''],
      description: [''],
    });
    this.setDataForm();
  }

  setDataForm(){
    this.formData.patchValue({name: this.data.originalTitle});
    this.formData.patchValue({releaseDate: this.parseDatePipe.transform(this.data.releaseDate)});
    this.formData.patchValue({description: this.data.description});
    this.loadData = true;
  }

  save() {  
    const releaseDateValue = this.formData.value.releaseDate;
    const formattedDate = releaseDateValue
      ? new Date(releaseDateValue).toISOString().split('T')[0]
      : '';

    const updated = {
      ...this.data,
      originalTitle: this.formData.value.name,
      releaseDate: formattedDate,
      description: this.formData.value.description
    };
    // console.log('updated::', updated);
    this.favoritesService.updateFavorite(updated).subscribe(() => {
      this.dialogRef.close(updated);
    });
  }
}
