import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-allowance-dialog",
  templateUrl: "./add-allowance-dialog.component.html",
  styleUrls: ["./add-allowance-dialog.component.scss"]
})
export class AddAllowanceDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      code: [1, Validators.required],
      title: ['', Validators.required],
      amount: [0.00, Validators.required],
      amountFor2020: [0.00, Validators.required],
    });
  }
}
