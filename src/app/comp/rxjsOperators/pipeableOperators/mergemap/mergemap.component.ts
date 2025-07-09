import { CommonModule } from '@angular/common';
import { OnInit, AfterViewInit, Component } from '@angular/core';
import { map, mergeMap, of, fromEvent, delay, from } from 'rxjs';

@Component({
  selector: 'app-mergemap',
  imports: [CommonModule],
  templateUrl: './mergemap.component.html',
  styleUrl: './mergemap.component.scss'
})
export class MergemapComponent implements OnInit, AfterViewInit {

  outer = of(1, 2, 3, 4, 5, 6)
  inner = (val: number) => of(val * 2)
  final = this.outer.pipe(
    mergeMap(this.inner, 1)
  )

  constructor() {
    console.clear();
    this.final.subscribe((res) => {
      console.log('res = ', res);
    })
  }

  // Second use case ---------------------------------------------------

  userData: any[] = [];


  ngAfterViewInit() {
    const button = document.getElementById('loadUserBtn');

    fromEvent(button!, 'click')
      .pipe(
        map(() => Math.floor(Math.random() * 100) + 1), // Random user ID
        mergeMap(id => this.fakeHttpCall(id)) // Simulate HTTP request
      )
      .subscribe(data => {
        console.log('Received:', data);
        this.userData.push(data); // Update UI
      });
  }


  // Simulated HTTP call
  fakeHttpCall(id: number) {
    return of({ id, name: `User-${id}` }).pipe(delay(1000)); // Delay 1s
  }


  //-- Third Example ------------------------------------------------------
  user = [
    {userId:1},
    {userId:2},
    {userId:3}
  ]

  course = [
    {courseId:1, cName:"Java"},
    {courseId:2, cName:"Python"},
    {courseId:3, cName:"Javascript"},
    {courseId:4, cName:"Go"}
  ]

  user$ = from(this.user)
  
  ngOnInit(): void {
    
    this.user$.pipe(
      mergeMap((user:any)=>{
        const result = this.course.filter((c)=>c.courseId == user.userId);
        return of({user, course : result})
      })
    ).subscribe((res)=>{
    console.log('user = ', res);
    })
  }



}
