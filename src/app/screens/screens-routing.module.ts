import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { ScreenRootComponent } from './screen-root.component';

const ROUTES: Routes = [
  {
    component: ScreenRootComponent,
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./index/index-screen.module').then((m) => m.IndexScreenModule),
      },
      {
        path: 'resume',
        loadChildren: () =>
          import('./resume/resume-screen.module').then((m) => m.ResumeScreenModule),
      }
    ],
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

/** Модуль маршрутизации экранов */
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ScreensRoutingModule {}
