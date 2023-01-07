import {
  HttpErrorResponse,
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';

@Injectable()
export class RequestEventsInterceptor implements HttpInterceptor {
  get beforeRequest$(): Observable<HttpRequest<any>> {
    return this._beforeRequest$.asObservable();
  }

  get afterRequest$(): Observable<HttpRequest<any>> {
    return this._afterRequest$.asObservable();
  }

  get httpError$(): Observable<HttpErrorResponse> {
    return this._httpError$.asObservable();
  }

  private readonly _beforeRequest$ = new Subject<HttpRequest<any>>();
  private readonly _afterRequest$ = new Subject<HttpRequest<any>>();
  private readonly _httpError$ = new Subject<HttpErrorResponse>();

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._beforeRequest$.next(request);

    return next.handle(request.clone({ url: '' })).pipe(
      finalize(() => this._afterRequest$.next(request)),
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          this._httpError$.next(error);
        }
        return throwError(() => error);
      })
    );
  }
}
