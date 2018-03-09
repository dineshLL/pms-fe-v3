import { FlexLayoutModule } from '@angular/flex-layout';
import { AngMatImporterModule } from './../ang-mat-importer/ang-mat-importer.module';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatDialogModule } from '@angular/material';
import { SnackAlertService } from './snack-alert.service';

@NgModule({
  imports: [
    CommonModule,
    AngMatImporterModule,
    FlexLayoutModule
  ],
  declarations: [AlertDialogComponent],
  providers: [SnackAlertService],
  exports: [ AlertDialogComponent ],
  entryComponents: [ AlertDialogComponent ]
})
export class NotificationsModule { }
