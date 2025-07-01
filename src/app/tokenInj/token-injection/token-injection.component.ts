import { Component, inject, OnInit } from '@angular/core';
import { LogMessage1Service } from '../services/log-message1.service';
import { LogMessage2Service } from '../services/log-message2.service';

@Component({
  selector: 'app-token-injection',
  imports: [],
  templateUrl: './token-injection.component.html',
  styleUrl: './token-injection.component.scss',
  providers: [
    // LogMessage2Service,
    // { provide: LogMessage1Service, useClass: LogMessage1Service },
    { provide: LogMessage2Service, useClass: LogMessage2Service }
  ]
})
export class TokenInjectionComponent implements OnInit {

  public logger = inject(LogMessage2Service)

  ngOnInit(): void {
    this.logger.log()
  }

}
