import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatInputModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class AngMatImporterModule { }
