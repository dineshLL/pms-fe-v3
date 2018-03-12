import { AlertDialogComponent } from "./../../../notifications/alert-dialog/alert-dialog.component";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-extra-information",
  templateUrl: "./extra-information.component.html",
  styleUrls: ["./extra-information.component.scss"]
})
export class ExtraInformationComponent implements OnInit {

  isLinear: false;
  
  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {}

  /**button action handlers */
  submit() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: "400px",
      data: { title: "Alert", message: "This is a alert", buttonText: "OK" }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(["/gen/successful"]);
    });
    //
  }
}
