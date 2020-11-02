import {
  Directive,
  ElementRef,
  Renderer2,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonMatchMediaService } from 'src/common/services';

@Directive({ selector: 'inner-scroll' })
export class InnerScrollDirective implements OnInit, OnDestroy {
  private _parent: any;
  private _grandParent: any;
  private unsubscribeAll: Subject<any>;

  constructor(
    private _elementRef: ElementRef,
    private _commonMediaMatchService: CommonMatchMediaService,
    private _renderer: Renderer2
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._parent = this._renderer.parentNode(this._elementRef.nativeElement);

    if (!this._parent) {
      return;
    }

    this._grandParent = this._renderer.parentNode(this._parent);

    this._commonMediaMatchService.onMediaChange
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => {
        this._addClass();
      });
  }

  ngOnDestroy(): void {
    if (!this._parent) {
      return;
    }

    this._removeClass();

    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private _addClass(): void {
    this._renderer.addClass(this._grandParent, 'inner-scroll');
  }

  private _removeClass(): void {
    this._renderer.removeClass(this._grandParent, 'inner-scroll');
  }
}
