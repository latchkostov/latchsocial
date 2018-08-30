import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Friend } from '../friend';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-list-friends',
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css']
})
export class ListFriendsComponent implements OnInit {

  private basePath = '/friends';
  private collection: AngularFirestoreCollection<Friend>;
  public friends: Observable<Friend[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.collection = this.db.collection<Friend>(this.basePath);
    this.friends = this.collection.valueChanges();
  }

  public addFriend() {
    const friend: Friend = { username: 'blgrnboy', firstName: 'Latch', lastName: 'Kostov', age: 31 };
    this.collection.doc(friend.username).set(friend);
  }

  public editAge(friend: Friend, age: number) {
    let query$: Observable<any>;
    const queryable = this.searchFriendsByFirstAndLastName(friend);
    query$ = queryable.snapshotChanges();

    query$.pipe(
      take(1)
    ).subscribe(data => {
      for (const item of data) {
        this.db.doc(item.payload.doc.ref.path).update({ age: 60 });
      }
    });
  }

  public deleteFriend(friend: Friend) {
    let query$: Observable<any>;
    const queryable = this.searchFriendsByFirstAndLastName(friend);
    query$ = queryable.snapshotChanges();

    query$.pipe(
      take(1)
    ).subscribe(data => {
      for (const item of data) {
        this.db.doc(item.payload.doc.ref.path).delete();
      }
    });
  }

  private searchFriendsByFirstAndLastName(friend: Friend) {
    const queryable = this.db.collection(this.basePath, ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.where('firstName', '==', friend.firstName).where('lastName', '==', friend.lastName);
      return query;
    });

    return queryable;
  }

}
