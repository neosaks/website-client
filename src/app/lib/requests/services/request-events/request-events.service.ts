import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestEventsInterceptor } from '../../interceptors/request-events/request-events.interceptor';

import { Observable } from 'rxjs';

@Injectable()
export class RequestEventsService {
  get beforeRequest$(): Observable<HttpRequest<unknown>> {
    return this._requestEventsInterceptor.beforeRequest$;
  }

  get afterRequest$(): Observable<HttpRequest<unknown>> {
    return this._requestEventsInterceptor.afterRequest$;
  }

  get httpError$(): Observable<HttpErrorResponse> {
    return this._requestEventsInterceptor.httpError$;
  }

  constructor(private _requestEventsInterceptor: RequestEventsInterceptor) {}
}
