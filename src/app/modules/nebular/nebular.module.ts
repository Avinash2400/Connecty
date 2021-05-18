import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbMenuModule,
  NbSidebarModule,
  NbUserModule,
} from '@nebular/theme';

@NgModule({
  exports: [
    NbCardModule,
    NbButtonModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbActionsModule,
    NbUserModule,
  ],
  imports: [CommonModule],
})
export class NebularModule {}
