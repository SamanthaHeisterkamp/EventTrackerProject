import { RitualService } from './services/ritual.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RitualComponent } from './components/ritual/ritual.component';
@NgModule({
  declarations: [
    AppComponent,
    RitualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [RitualService],
  bootstrap: [AppComponent]
})
export class AppModule { }
