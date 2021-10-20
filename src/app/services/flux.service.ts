import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SSE } from '../util/SSE';

@Injectable({
  providedIn: 'root',
})
export class FluxService {
  source: any;

  constructor() {}

  public flux<T, K>(path: string, headers: string, httpMethod: string, payload?: T): Observable<K> {
    return new Observable((observer) => {
      let requestURL = path;

      let request = {
        headers: headers ? JSON.parse(headers) : "",
        payload: payload,
        method: httpMethod
      };

      this.source = SSE(requestURL, request);

      this.source.addEventListener('message', (e) => {
        observer.next(JSON.parse(e.data) as K);
      });

      this.source.stream();
    });
  }

  get sourcing() {
    return this.source;
  }
}
