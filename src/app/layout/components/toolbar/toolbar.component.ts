import { ChangeDetectionStrategy,ViewEncapsulation,Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CommonSidebarService } from 'src/common';
import { RootStoreState, layoutSelectors } from 'src/app/core';

@Component({
  selector: 'hare-layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  navigation$: Observable<any> = this._store.select(
    layoutSelectors.getLayoutNavigation
  );

  constructor(
    private _store: Store<RootStoreState>,
    private _sidebarService: CommonSidebarService,
  ) {}

  toggleSidebarOpen(key): void {
    this._sidebarService.getSidebar(key).toggleOpen();
  }
}
