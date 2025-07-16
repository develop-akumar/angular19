import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {



  showStatus() {
    console.log(this.username.errors);
  }




  username!: FormControl
  groupForm2!: FormGroup;
  groupForm!: FormGroup

  constructor() {

    this.username = new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ])

    // From Group
    this.groupForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
    })

    // Form array -------------------------------------------------
    this.groupForm2 = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormGroup("", [Validators.required]),

      array: new FormArray([this.getChildForm()])
    })
  }


  // getter method to access and run for loop in html
  // also to pass in <div formArrayName="array">
  get array(): FormArray {
    return this.groupForm2.get('array') as FormArray;
  }

  getChildForm(): FormGroup {
    return new FormGroup({
      subject: new FormControl(""),
      marks: new FormControl("")
    })
  }

  add() {
    this.array.push(this.getChildForm())
  }

  remove(index: any) {
    this.array.removeAt(index)
  }


}
