import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';
@Component({
  selector: 'hare-simple-right-sidebar-2',
  templateUrl: './right-sidebar-2.component.html',
  styleUrls: ['./right-sidebar-2.component.scss']
})
export class SimpleRightSidebar2Component {
  constructor(private _sidebarService: CommonSidebarService) {}

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
