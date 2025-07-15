import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cdref',
  imports: [CommonModule],
  templateUrl: './cdref.component.html',
  styleUrl: './cdref.component.scss'
})
export class CDRefComponent implements OnInit {

  CDRef = inject(ChangeDetectorRef)

  bh$ = new BehaviorSubject<string>("Ram")

  ngOnInit(){
    // Initial change detection
    this.CDRef.detectChanges();

    // Simulate a change after 2 seconds
    setTimeout(() => {
      console.log('Change detected after 2 seconds');
      this.CDRef.detectChanges();
    }, 2000); 
  }

}
