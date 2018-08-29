import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsModule } from '../friends/friends.module';

const routes: Routes = [
  {
    path: 'friends', loadChildren: () => FriendsModule
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppRoutingModule { }
