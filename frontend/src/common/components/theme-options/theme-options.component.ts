import {
  Component,
  HostBinding,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { commonAnimations } from 'src/common/scss/animations';
import { CommonSidebarService } from 'src/common/components/sidebar/sidebar.service';

@Component({
  selector: 'hare-theme-options',
  templateUrl: './theme-options.component.html',
  styleUrls: ['./theme-options.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class ThemeOptionsComponent implements OnInit, OnDestroy {
  @Input() activeTheme: string;
  @Output() themeChanged: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('class.backend-closed') barClosed = true;

  form: FormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _sidebarService: CommonSidebarService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      theme: new FormControl(this.activeTheme),
      layout: this._formBuilder.group({
        navigation: this._formBuilder.group({
          customBackgroundColor: new FormControl(),
          headerBackground: new FormControl(),
          barBackground: new FormControl()
        }),
        toolbar: this._formBuilder.group({
          background: new FormControl(),
          customBackgroundColor: new FormControl()
        }),
        footer: this._formBuilder.group({
          background: new FormControl(),
          customBackgroundColor: new FormControl()
        })
      })
    });

    this.form
      .get('theme')
      .valueChanges.pipe(takeUntil(this._unsubscribeAll))
      .subscribe((theme) => {
        this.themeChanged.emit(theme);
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleSidebarOpen(key): void {
    this._sidebarService.getSidebar(key).toggleOpen();
  }
}
