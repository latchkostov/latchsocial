import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  ],
  imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CommonModule, BrowserModule, FormsModule
  ]
})
export class SharedModule { }
