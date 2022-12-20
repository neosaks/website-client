import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { finalize, catchError, tap } from 'rxjs/operators';

import { isObject, AliasService } from '@lib/core';

import { RequestCounterService } from '../../services/request-counter/request-counter.service';
import { RequestEventsService } from '../../services/request-events/request-events.service';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {
  constructor(
    private _requestCounter: RequestCounterService,
    private _requestEvents: RequestEventsService,
    private _alias: AliasService,
  ) {}

  /** Intercept */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._beforeRequest(request);

    const url: string = this._alias.getAlias(request.url);

    return next.handle(request.clone({ url })).pipe(
      finalize(() => this._afterRequest(request)),
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          this._requestEvents._dispatchErrorRequestEvent(error);
        }
        return throwError(error);
      }),
      // @see [[this._hasErrorsFromBackend]]
      // tap((response) => {
      //   if (this._hasErrorsFromBackend(response)) {
      //     this._requestEvents.error$.next(response);
      //   }
      // })
    );
  }

  private _beforeRequest(request: HttpRequest<any>): void {
    this._requestEvents._dispatchBeforeRequestEvent(request);
    this._requestCounter._increment();
  }

  private _afterRequest(request: HttpRequest<any>): void {
    this._requestEvents._dispatchAfterRequestEvent(request);
    this._requestCounter._decrement();
  }

  // Добавить поддержку через реализацию интерфейса или
  // передачу callback функции через конфигурацию

  // private _hasErrorsFromBackend(
  //   response: HttpEvent<any>
  // ): response is HttpResponse<any> {
  //   return false;
  // }
}
