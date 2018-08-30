import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'friends', loadChildren: '../friends/friends.module#FriendsModule' },
  { path: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
