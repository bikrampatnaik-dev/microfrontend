import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableComponent } from 'b2b-data-table';



@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    DataTableComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
