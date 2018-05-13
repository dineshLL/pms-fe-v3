import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-spouse",
  templateUrl: "./add-spouse.component.html",
  styleUrls: ["./add-spouse.component.scss"]
})
export class AddSpouseComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddSpouseComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      relation: ["", Validators.required],
      gender: ["", Validators.required],
      dob: ["", Validators.required],
      nic: ["", Validators.required],
      disabled: [false, Validators.required],
      marriageCertNumber: ["", Validators.required],
      birthCertNumber: ["", Validators.required]
    });
  }

  /**button click action handlers */
  close() {
    this.dialogRef.close();
  }
}
