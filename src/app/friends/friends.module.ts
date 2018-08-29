import { NgModule } from '@angular/core';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends.component';

const routes: Routes = [
    {
        path: '', children: [
            { path: 'list', component: ListFriendsComponent }
        ]
    },
    { path: '**', component: ListFriendsComponent }
];

@NgModule({
  declarations: [
      ListFriendsComponent,
      FriendsComponent
  ],
  imports: [
      RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [],
  exports: [
      RouterModule
  ]
})
export class FriendsModule { }
