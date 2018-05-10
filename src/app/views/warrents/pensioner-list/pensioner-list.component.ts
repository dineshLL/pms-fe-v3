import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensionerDetailComponent } from '../pensioner-detail/pensioner-detail.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-pensioner-list',
  templateUrl: './pensioner-list.component.html',
  styleUrls: ['./pensioner-list.component.scss']
})
export class PensionerListComponent implements OnInit {

  DIALOG_WIDTH = '600px';

  constructor(private router: Router,private dialogMgr: MatDialog) { }

  ngOnInit() {
  }

  gotoPensionerDetails(){
    this.dialogMgr.open(PensionerDetailComponent, {
      width: this.DIALOG_WIDTH
    }).afterClosed().subscribe(result => {
      if (result === true) {
        this.updatePensioner();
      }
    });
  }

  updatePensioner() {
    this.router.navigate(['./warrents/registrationform']);
  }
}
