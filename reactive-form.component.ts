import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  Data: Array<any> = [
    { name: 'English', value: 'english' },
    { name: 'Kannada', value: 'kannada' },
    { name: 'French', value: 'french' },
    { name: 'Japaneese', value: 'japaneese' },
    { name: 'Chinees', value: 'chinees' },
  ];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService
  ) { 
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: new FormControl('', Validators.required),
      checkArray: this.fb.array([], [Validators.required]),
      languages: new FormControl('', Validators.required),
    },
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!');
      console.table(this.registerForm.value);
    }
  }
}
