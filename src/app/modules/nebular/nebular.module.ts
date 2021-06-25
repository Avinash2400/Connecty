import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbSidebarModule,
  NbUserModule,
} from '@nebular/theme';

@NgModule({
  exports: [
    NbCardModule,
    NbButtonModule,
    NbSidebarModule,
    NbCardModule,
    NbIconModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
  ],
  imports: [CommonModule],
})
export class NebularModule {}
