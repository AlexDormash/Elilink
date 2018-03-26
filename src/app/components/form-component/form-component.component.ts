import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ShareData} from '../shareData.service';

@Component({
  selector: 'el-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponentComponent implements OnInit {

  formData: FormGroup;
  name: FormControl;
  lastName: FormControl;
  site: FormControl;
  email: FormControl;
  showEmail = false;

  constructor(private data: ShareData) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.site = new FormControl('', [Validators.required, Validators.pattern('^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$')]);
    this.email = new FormControl('');
  }

  createForm() {
    this.formData = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      site: this.site,
      email: this.email
    });
  }

  submitForm() {
    if (this.formData.valid) {
      this.formData.value['date'] = new Date();
      this.data.changeMessage(this.formData.value);
      localStorage['sendData'] = JSON.stringify(this.formData.value);
      this.createFormControls();
      this.createForm();
      this.showEmail = false;
    }
  }

  showEmailToggle() {
    this.showEmail = true;
    this.formData.controls['email'].setValidators([Validators.required, Validators.pattern('^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$')]);
  }

}
