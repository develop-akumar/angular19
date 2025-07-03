import { Component, Inject, inject, OnInit } from '@angular/core';
import { LogMessage1Service } from '../services/log-message1.service';
import { LogMessage2Service } from '../services/log-message2.service';
import { Log_Msg1 } from '../../dependencies/injection-token';

@Component({
  selector: 'app-token-injection',
  imports: [],
  templateUrl: './token-injection.component.html',
  styleUrl: './token-injection.component.scss',
  providers: [
    // LogMessage2Service,
    { provide: Log_Msg1, useClass: LogMessage1Service },
    // { provide: LogMessage2Service, useClass: LogMessage2Service }
  ]
})
export class TokenInjectionComponent implements OnInit {

  // public logger = inject(LogMessage2Service)

  constructor(@Inject(Log_Msg1) private logger : LogMessage1Service){}

  ngOnInit(): void {
    this.logger.log()
  }

}
