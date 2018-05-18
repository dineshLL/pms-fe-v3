import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatInputModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatSnackBarModule, MatTabsModule } from '@angular/material';


@NgModule({
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class AngMatImporterModule { }
