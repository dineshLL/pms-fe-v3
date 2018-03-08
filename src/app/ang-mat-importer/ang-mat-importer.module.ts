import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatInputModule, MatButtonModule, MatCardModule, MatDialogModule, MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule
  ]
})
export class AngMatImporterModule { }
