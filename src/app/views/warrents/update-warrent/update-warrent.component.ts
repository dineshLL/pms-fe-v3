import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-update-warrent',
  templateUrl: './update-warrent.component.html',
  styleUrls: ['./update-warrent.component.scss']
})
export class UpdateWarrentComponent implements OnInit {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

}
