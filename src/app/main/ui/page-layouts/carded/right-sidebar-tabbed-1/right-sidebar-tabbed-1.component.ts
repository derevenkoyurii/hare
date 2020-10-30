import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';
@Component({
  selector: 'hare-carded-right-sidebar-tabbed-1',
  templateUrl: './right-sidebar-tabbed-1.component.html',
  styleUrls: ['./right-sidebar-tabbed-1.component.scss']
})
export class CardedRightSidebarTabbed1Component {
  /**
     * Constructor
     *
     * @param _sidebarService

*/
  constructor(private _sidebarService: CommonSidebarService) {}
  /**
   * Toggle sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
