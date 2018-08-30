import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
      CommonModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    CommonModule, FormsModule
  ]
})
export class SharedModule { }
