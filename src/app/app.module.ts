import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CaptalizePipe } from 'app/capitalize.pipe';
import { OrdinalPipe } from 'app/ordinal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrdinalPipe,
    CaptalizePipe
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
