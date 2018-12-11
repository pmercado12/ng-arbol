import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ArbolModule } from './arbol/arbol.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ArbolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
