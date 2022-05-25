import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
const materailComponents = [MatToolbarModule, MatGridListModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, materailComponents],
  exports: [materailComponents],
})
export class MaterialComponentsModule {}
