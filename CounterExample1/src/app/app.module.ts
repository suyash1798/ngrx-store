import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store/@ngrx/store';
import {reducer} from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
