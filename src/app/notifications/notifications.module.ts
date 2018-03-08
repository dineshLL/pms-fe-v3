import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { MatSnackBarModule, MatDialogModule } from '@angular/material';
import { SnackAlertService } from './snack-alert.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  declarations: [AlertComponent],
  providers: [SnackAlertService]
})
export class NotificationsModule { }
