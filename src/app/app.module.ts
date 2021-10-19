import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Components
import { FluxManagementComponent } from 'src/app/components/flux-management/flux-management.component';
import { AppComponent } from 'src/app/app.component';

// Module
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [AppComponent, FluxManagementComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
