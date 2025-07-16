import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  username = new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('^[a-zA-Z0-9]+$')
    ])

    showStatus(){
      console.log(this.username.errors );
    }

    // From Group
    groupForm:FormGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
    })  


    groupForm2:FormGroup = new FormGroup({
      username : new FormControl("", [Validators.required]),
      password : new FormGroup("", [Validators.required]),

      array : new FormArray([])
    })
}
