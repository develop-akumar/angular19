import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-simple-form',
  imports: [FormsModule],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.scss',
  standalone: true
})
export class SimpleFormComponent {

  user: { username: string } = { username: "" }
  ramkishore: string = "ramkishore";
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('form is valid = ', form.value);
    }
  }

}
