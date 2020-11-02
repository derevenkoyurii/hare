import { Component } from '@angular/core';

import { CommonSidebarService } from 'src/common';
@Component({
  selector: 'hare-simple-left-sidebar-4',
  templateUrl: './left-sidebar-4.component.html',
  styleUrls: ['./left-sidebar-4.component.scss']
})
export class SimpleLeftSidebar4Component {
  constructor(private _sidebarService: CommonSidebarService) {}

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
