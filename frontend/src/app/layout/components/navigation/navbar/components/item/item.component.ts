import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { layoutSelectors, RootStoreState } from 'src/app/core/root-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'hare-vertical-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavVerticalItemComponent implements OnInit {
  isFolded$: Observable<any>;

  @HostBinding('class') classes = 'nav-item';
  @Input() item: any;

  /**
   * Constructor
   *
   * @param  _store
   *
   */
  constructor(private _store: Store<RootStoreState>) {}

  /**
   * On init
   */
  ngOnInit(): void {
    this.isFolded$ = this._store.select(layoutSelectors.getNavigationIsFolded);
  }
}
