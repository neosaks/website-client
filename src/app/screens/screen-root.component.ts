import { Component, ChangeDetectionStrategy, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ShellService } from '@lib/core';

declare class WOW {
  init(): void;
}

@Component({
  selector: 'app-screen-root',
  templateUrl: './screen-root.component.html',
  styleUrls: ['./screen-root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/** Корневой компонент экранов */
export class ScreenRootComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID)
    private _platformId: Record<string, unknown>,
    @Inject(DOCUMENT)
    private _document: Document,
    private _shell: ShellService
  ) {}

  ngOnInit(): void {
    const platformId = this._platformId;

    if (isPlatformBrowser(platformId)) {
      const document = this._document;
      const shell = this._shell;

      // Updating the page title if the shell state is changed
      shell.stateChanged$.subscribe(() => {
        document.title = shell.state.appName;
      });

      // Initialization WOW
      if (WOW) {
        new WOW().init();
      }
    }
  }
}
