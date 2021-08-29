import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { TwowayComponent } from './twoway/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyComponent,
    EventComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
