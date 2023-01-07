import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestEventsInterceptor } from './interceptors/request-events/request-events.interceptor';
import { RequestEventsService } from './services/request-events/request-events.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestEventsInterceptor,
      multi: true
    },
    RequestEventsService,
  ],
})
export class RequestsModule {}
