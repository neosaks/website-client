import { Observable } from 'rxjs';

export async function toPromise<T>(observable: Observable<T>): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    const values: T[] = [];
    observable.subscribe({
      next: (value) => values.push(value),
      error: reject,
      complete: () => resolve(values),
    });
  });
}
