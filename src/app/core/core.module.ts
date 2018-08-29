import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavModule } from '../nav/nav.module';
import { FriendsModule } from '../friends/friends.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NavModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    NavModule
  ]
})
export class CoreModule { }
