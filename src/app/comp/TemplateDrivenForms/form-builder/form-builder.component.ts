import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {

  fb: FormBuilder = inject(FormBuilder)
  groupForm!: FormGroup

  constructor() {
    this.groupForm = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control(""),
      email: this.fb.control(""),

      address: this.fb.group({
        street: this.fb.control(""),
        city: this.fb.control(""),
        state: this.fb.control("")
      }),

      hobbies: this.fb.array([])
    })
  }

  getFormArray(): FormGroup {
    return this.fb.group({
      subject: this.fb.control(""),
      marks: this.fb.control("")
    })
  }

  get array():FormArray{
    return this.groupForm.get('hobbies') as FormArray
  }

  add(){
    this.array.push(this.getFormArray())
  }

  remove(index: number) {
    this.array.removeAt(index)
  }

}
