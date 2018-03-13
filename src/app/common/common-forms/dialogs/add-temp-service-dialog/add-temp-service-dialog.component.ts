import { MatDialogRef } from "@angular/material";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-temp-service-dialog",
  templateUrl: "./add-temp-service-dialog.component.html",
  styleUrls: ["./add-temp-service-dialog.component.scss"]
})
export class AddTempServiceDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddTempServiceDialogComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      institution: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      recovered: ['', Validators.required],
      contribution: ['', Validators.required]
    });
  }

  close() {
    this.dialogRef.close();
  }
}
