import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { SharedModule } from '../shared/shared.module';
import { NavModule } from '../nav/nav.module';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    NavModule,
    AngularFireModule.initializeApp(environment.firebase, 'latchsocial'),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    NavModule
  ]
})
export class CoreModule { }
