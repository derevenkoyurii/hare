// outer
import { Component } from '@angular/core';
// inner
import { CommonSidebarService } from 'src/common';
// end

@Component({
  selector: 'hare-carded-left-sidebar-1',
  templateUrl: './left-sidebar-1.component.html',
  styleUrls: ['./left-sidebar-1.component.scss']
})
export class CardedLeftSidebar1Component {
  constructor(private _sidebarService: CommonSidebarService) {}

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
