import { NgModule } from '@angular/core';
import { ListFriendsComponent } from './list-friends/list-friends.component';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    {
        path: '', component: FriendsComponent, children: [
            { path: 'list', pathMatch: 'full', component: ListFriendsComponent },
            { path: '', component: ListFriendsComponent }
        ]
    }
];

@NgModule({
  declarations: [
      ListFriendsComponent,
      FriendsComponent
  ],
  imports: [
      RouterModule.forChild(routes),
      SharedModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
      RouterModule
  ]
})
export class FriendsModule { }
