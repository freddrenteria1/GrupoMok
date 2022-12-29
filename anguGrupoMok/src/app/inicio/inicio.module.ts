import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import {   MatTableModule,MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    CommonModule
  ],
  declarations: [InicioComponent],
  exports:[InicioComponent],
})
export class InicioModule { }
