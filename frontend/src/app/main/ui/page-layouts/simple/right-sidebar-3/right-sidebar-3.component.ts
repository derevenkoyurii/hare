import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';

@Component({
  selector: 'hare-simple-right-sidebar-4',
  templateUrl: './right-sidebar-3.component.html',
  styleUrls: ['./right-sidebar-3.component.scss']
})
export class SimpleRightSidebar3Component {
  constructor(private _sidebarService: CommonSidebarService) {}

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
