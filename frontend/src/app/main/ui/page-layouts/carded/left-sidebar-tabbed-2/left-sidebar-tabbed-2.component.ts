import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';

@Component({
  selector: 'hare-carded-left-sidebar-tabbed-2',
  templateUrl: './left-sidebar-tabbed-2.component.html',
  styleUrls: ['./left-sidebar-tabbed-2.component.scss']
})
export class CardedLeftSidebarTabbed2Component {
  constructor(private _sidebarService: CommonSidebarService) {}

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
