import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';
@Component({
  selector: 'hare-carded-right-sidebar-2',
  templateUrl: './right-sidebar-2.component.html',
  styleUrls: ['./right-sidebar-2.component.scss']
})
export class CardedRightSidebar2Component {
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
