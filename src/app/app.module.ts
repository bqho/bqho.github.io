import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navigation/nav.component';
import { HomeComponent } from './home/home.component';
import { publicationsComponent } from './publications/publication.component';
import { cellsystemsComponent } from './cellsystems-data/cellsystems.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    publicationsComponent,
    cellsystemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
