import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestCounterService {
  private _numberOfPendingRequests = 0;

  /** Количество ожидающих запросов приложения (pending) */
  get numberOfPendingRequests(): number {
    return this._numberOfPendingRequests;
  }

  /** Увеличивает значение [[numberOfPendingRequests]] на "1" */
  _increment(): void {
    this._numberOfPendingRequests++;
  }

  /** Уменьшает значение [[numberOfPendingRequests]] на "1" */
  _decrement(): void {
    this._numberOfPendingRequests--;
  }
}
