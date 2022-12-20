import {
  HttpErrorResponse,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestEventsService {
  get beforeRequest$(): Observable<HttpRequest<any>> {
    return this._beforeRequest$.asObservable();
  }

  get afterRequest$(): Observable<HttpRequest<any>> {
    return this._afterRequest$.asObservable();
  }

  get error$(): Observable<HttpErrorResponse> {
    return this._error$.asObservable();
  }

  private readonly _beforeRequest$ = new Subject<HttpRequest<any>>();
  private readonly _afterRequest$ = new Subject<HttpRequest<any>>();
  private readonly _error$ = new Subject<HttpErrorResponse>();

  _dispatchBeforeRequestEvent(request: HttpRequest<any>): void {
    this._beforeRequest$.next(request);
  }

  _dispatchAfterRequestEvent(request: HttpRequest<any>): void {
    this._afterRequest$.next(request);
  }

  _dispatchErrorRequestEvent(error: HttpErrorResponse): void {
    this._error$.next(error);
  }
}
