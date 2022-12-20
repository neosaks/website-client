import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { ScreensRoutingModule } from './screens-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ScreenRootComponent } from './screen-root.component';

@NgModule({
  declarations: [ScreenRootComponent, PageNotFoundComponent],
  imports: [
    ScreensRoutingModule,
    CommonModule,
    PortalModule
  ],
})
/** Модуль экранов */
export class ScreensModule {}
