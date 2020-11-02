import * as fromRouter from '@ngrx/router-store';
import { NavigationState, LayoutState } from 'src/app/core/index';

export interface RootStoreState {
  layout: LayoutState;
  navigation: NavigationState;
  router: fromRouter.RouterReducerState<any>;
}
