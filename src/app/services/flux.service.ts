import { Injectable } from '@angular/core';

import { SSE } from '../util/SSE';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FluxService {
  source: any;

  constructor() {}

  public data() {
    let source = SSE('http://localhost:8080/?iterations=3&interval=2000', {});
    source.addEventListener('message', (e) => {
      let payload = JSON.parse(e.data);
      console.log(payload);
    });
    source.stream();
  }

  public data2() {
    let source = SSE('http://localhost:8080', {
      headers: { 'Content-Type': 'application/json' },
      payload: JSON.stringify({ iterations: 3, interval: 2000 }),
      method: 'POST',
    });

    source.stream();

    source.addEventListener('message', (e) => {
      let payload = JSON.parse(e.data);
      console.log(payload);
    });

    source.removeEventListener('message');
  }

  public flux<T, K>(path: string, httpMethod: string, payload: T): Observable<K> {
    return new Observable((observer) => {
      let requestURL = `${environment.api}/${path}`;

      let requestHeaders = {
        'Content-Type': 'application/json',
      };
      let request = {
        headers: requestHeaders,
        payload: JSON.stringify(payload),
        method: httpMethod,
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
