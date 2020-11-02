import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { commonAnimations } from 'src/common';
import { layoutSelectors, RootStoreState } from 'src/app/core/root-store';

@Component({
  selector: 'hare-vertical-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss'],
  animations: commonAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavVerticalCollapsableComponent implements OnInit, OnDestroy {
  @Input() item: any;

  @HostBinding('class') classes = 'nav-collapsable nav-item';
  @HostBinding('class.open') public isOpen = false;

  isFolded$: Observable<any>;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _router: Router,
    private _store: Store<RootStoreState>
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.isFolded$ = this._store.select(layoutSelectors.getNavigationIsFolded);

    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((event: NavigationEnd) => {
        if (this.isUrlInChildren(this.item, event.urlAfterRedirects)) {
          this.expand();
        } else {
          this.collapse();
        }
      });

    if (this.isUrlInChildren(this.item, this._router.url)) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleOpen(ev): void {
    ev.preventDefault();
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
    }
  }

  expand(): void {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;

    this._changeDetectorRef.markForCheck();
  }

  collapse(): void {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    this._changeDetectorRef.markForCheck();
  }

  isUrlInChildren(parent, url): boolean {
    if (!parent.children) {
      return false;
    }

    [].forEach.call(parent.children, (children) => {
      if (children.children) {
        if (this.isUrlInChildren(children, url)) {
          return true;
        }
      }

      if (children.url === url || url.includes(children.url)) {
        return true;
      }
    });

    return false;
  }
}
