import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule
  ],
  exports: [
    MatTableModule,
    MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule
  ]
})
export class MarterialModule { }
