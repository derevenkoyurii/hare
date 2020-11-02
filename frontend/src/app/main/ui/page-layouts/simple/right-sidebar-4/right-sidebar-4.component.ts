import { Component } from '@angular/core';
import { CommonSidebarService } from 'src/common';

@Component({
  selector: 'hare-simple-right-sidebar-4',
  templateUrl: './right-sidebar-4.component.html',
  styleUrls: ['./right-sidebar-4.component.scss']
})
export class SimpleRightSidebar4Component {
  constructor(private _sidebarService: CommonSidebarService) {}

  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
