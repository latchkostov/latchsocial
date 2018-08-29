import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatExpansionModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    RouterModule
  ],
  providers: [],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
