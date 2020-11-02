import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';
@Component({
  selector: 'hare-simple-left-sidebar-1',
  templateUrl: './left-sidebar-1.component.html',
  styleUrls: ['./left-sidebar-1.component.scss']
})
export class SimpleLeftSidebar1Component {
  constructor(private _sidebarService: CommonSidebarService) {}

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
