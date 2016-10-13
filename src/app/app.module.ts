import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertBindingComponent } from './databinding/propert-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertBindingComponent,
    EventBindingComponent,
    LifecycleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
