import { Component, OnInit } from '@angular/core';
import { Flux } from 'src/app/models/flux-payload.model';
import { FluxResponse } from 'src/app/models/flux-response.model';
import { delay, switchMap, takeUntil, timeout } from 'rxjs/operators';

// Service
import { FluxService } from 'src/app/services/flux.service';
import { from, interval, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-flux-management',
  templateUrl: './flux-management.component.html',
  styleUrls: ['./flux-management.component.scss'],
})
export class FluxManagementComponent implements OnInit {
  fluxSubscription: Subscription;
  constructor(private fluxService: FluxService) {}

  ngOnInit(): void {}

  onStart() {
    if (this.fluxSubscription) {
      this.onClose();
    }
    this.fluxSubscription = this.fluxService
      .flux<Flux, FluxResponse>('', 'POST', {
        iterations: 4000,
        interval: 2000
      })
      .subscribe((data: FluxResponse) => {
        console.log('data', data);
      });

    console.log(this.fluxSubscription.closed);
  }

  onClose() {
    this.fluxSubscription.unsubscribe();
    this.fluxService.sourcing.close();
    console.log('closed');
  }
}
