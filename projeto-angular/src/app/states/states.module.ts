import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatesComponent } from './states.component';
import { StatesRoutingModule } from './states.routing.module';

@NgModule({
  declarations: [
    StatesComponent
  ],
  imports: [
    CommonModule,
    StatesRoutingModule
  ]
})
export class StatesModule { }
