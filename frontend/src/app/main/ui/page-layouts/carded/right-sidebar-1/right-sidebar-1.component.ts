import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';
@Component({
  selector: 'hare-carded-right-sidebar-1',
  templateUrl: './right-sidebar-1.component.html',
  styleUrls: ['./right-sidebar-1.component.scss']
})
export class CardedRightSidebar1Component {
  constructor(private _sidebarService: CommonSidebarService) {}

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
