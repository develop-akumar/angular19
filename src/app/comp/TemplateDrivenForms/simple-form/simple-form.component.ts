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

  onSubmit(){

  }

}
