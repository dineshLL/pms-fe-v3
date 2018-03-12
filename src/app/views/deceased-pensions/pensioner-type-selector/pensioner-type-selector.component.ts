import { MilitoryPreFormDialogComponent } from './../../../common/common-forms/dialogs/militory-pre-form-dialog/militory-pre-form-dialog.component';
import { JudicialPreFormDialogComponent } from './../../../common/common-forms/dialogs/judicial-pre-form-dialog/judicial-pre-form-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

class Config {
  showCivil = false;
  showMilitory = false;
  showJudicial = false;
  showNonJudicial = false;
  showArmy = false;
  showNavy = false;
  showAirForce = false;
}

@Component({
  selector: 'app-pensioner-type-selector',
  templateUrl: './pensioner-type-selector.component.html',
  styleUrls: ['./pensioner-type-selector.component.scss']
})
export class PensionerTypeSelectorComponent implements OnInit {

 /**constants */
 CIVIL = 'civil';
 MILITORY = 'militory';
 JUDICIAL = 'judicial';
 NON_JUDICIAL = 'non_judicial';
 ARMY = 'army';
 NAVY = 'nevy';
 ARI_FORCE = 'air_force';

 DIALOG_WIDTH = '600px';

 config: Config;
 history: Config[];

 constructor(
   private dialogMgr: MatDialog,
   private router: Router
 ) { }

 ngOnInit() {
   this.config = new Config();
   this.history = new Array<Config>();

   this.config.showCivil = true;
   this.config.showMilitory = true;

   this.history.push(this.config);
 }

 /**button action handlers */
 handleTiteClick(command: string) {
   switch (command) {
     case this.CIVIL: {
       this.config.showCivil = false;
       this.config.showMilitory = false;
       this.config.showJudicial = true;
       this.config.showNonJudicial = true;
       break;
     }

     case this.MILITORY: {
       this.config.showCivil = false;
       this.config.showMilitory = false;
       this.config.showJudicial = false;
       this.config.showNonJudicial = false;

       this.config.showArmy = true;
       this.config.showNavy = true;
       this.config.showAirForce = true;
       break;
     }

     case this.NON_JUDICIAL: {
       this.gotoForm();
       break;
     }

     case this.ARI_FORCE:
     case this.ARMY:
     case this.NAVY: {
       this.showPreMilitoryDialog();
       break;
     }

     case this.JUDICIAL: {
       this.showPreJudicialDialog();
       break;
     }

     default: break;
   }

   this.history.push(this.config);
 }

 reverseActionHandler() {
   if (this.history.length === 1) {
   this.config = this.history[0];
   }
 }

 showPreJudicialDialog() {
   this.dialogMgr.open(JudicialPreFormDialogComponent, {
     width: this.DIALOG_WIDTH
   }).afterClosed().subscribe(result => {
     if (result === true) {
       this.gotoForm();
     }
   });
 }

 showPreMilitoryDialog() {
   this.dialogMgr.open(MilitoryPreFormDialogComponent, {
     width: this.DIALOG_WIDTH
   }).afterClosed().subscribe(result => {
     if (result === true) {
       this.gotoForm();
     }
   });
 }

 gotoForm() {
   this.router.navigate(['/regular/form']);
 }
}
