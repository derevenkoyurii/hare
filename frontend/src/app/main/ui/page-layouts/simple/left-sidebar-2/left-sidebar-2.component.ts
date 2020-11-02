import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';
@Component({
  selector: 'hare-simple-left-sidebar-2',
  templateUrl: './left-sidebar-2.component.html',
  styleUrls: ['./left-sidebar-2.component.scss']
})
export class SimpleLeftSidebar2Component {
  constructor(private _sidebarService: CommonSidebarService) {}

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
