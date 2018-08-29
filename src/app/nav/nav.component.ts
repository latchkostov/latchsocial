import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  public opened = true;
  public panelOpenState = false;
  public mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  customCollapsedHeight = '56px';
  customExpandedHeight = '56px';

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  public toggleMenu() {
    console.log(this.sidenav);
    this.sidenav.opened ? this.sidenav.close() : this.sidenav.open();
    this.opened = !this.sidenav.opened;
  }

}
