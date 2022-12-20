import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeScreenComponent } from './resume-screen.component';

import { AboutCardComponent } from './components/about-card/about-card.component';
import { ExperienceScreenComponent } from './components/experience-card/experience-card.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { SkillProgressBarsComponent } from './components/skill-progress-bars/skill-progress-bars.component';
import { SkillSpinnersComponent } from './components/skill-spinners/skill-spinners.component';

@NgModule({
  declarations: [
    ResumeScreenComponent,
    AboutCardComponent,
    ExperienceScreenComponent,
    PersonalCardComponent,
    SkillProgressBarsComponent,
    SkillSpinnersComponent
  ],
  exports: [ResumeScreenComponent],
  imports: [
    ResumeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()]
})
/** Модуль Resume экрана */
export class ResumeScreenModule {}
