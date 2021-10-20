import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Service
import { FluxService } from 'src/app/services/flux.service';

@Component({
  selector: 'app-flux-management',
  templateUrl: './flux-management.component.html',
  styleUrls: ['./flux-management.component.scss'],
})
export class FluxManagementComponent implements OnInit {
  fluxSubscription: Subscription;

  loading: boolean = false;

  stopButtonText: string = 'Stop';

  request: string = '';

  fluxForm: FormGroup;

  list: any[] = [];

  constructor(private fluxService: FluxService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fluxForm = this.formBuilder.group({
      url: ['', [Validators.required]],
      request: [''],
      httpVerb: [''],
      headers: [JSON.stringify({ 'Content-Type': 'application/json' })],
    });
  }

  onReset() {
    this.stopButtonText = 'Stop';
    this.loading = false;

    this.list = [];

    this.fluxService.sourcing.close();

    if (this.fluxSubscription) this.fluxSubscription.unsubscribe();
  }

  onStart() {
    this.loading = true;

    let { url, request, headers, httpVerb } = this.fluxForm.controls;

    this.fluxSubscription = this.fluxService
      .flux<string, string>(url.value, headers.value, httpVerb.value ? httpVerb.value : 'GET', request.value)
      .subscribe((data: string) => {
        this.list.push(data);
      });
  }

  onStop() {
    this.stopButtonText = 'Stopped';
    this.fluxService.sourcing.close();
    if (this.fluxSubscription) this.fluxSubscription.unsubscribe();
  }
}
