import {Component, OnInit} from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  dataForm: any = {
    op1: '',
    op2: '',
    fecha: '',
  };

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      op1: new FormControl('', Validators.required),
      op2: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.form.invalid);
  }
}
