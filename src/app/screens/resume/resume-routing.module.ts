import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeScreenComponent } from './resume-screen.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ResumeScreenComponent,
  },
];

/** Модуль маршрутизации экрана "Резюме" */
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
