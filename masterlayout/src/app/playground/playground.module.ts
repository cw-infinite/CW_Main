import { NgModule } from '@angular/core';
import { Play1Component } from './play1/play1.component';
import { Play2Component } from './play2/play2.component';
import { Play3Component } from './play3/play3.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PlaygroundComponent,
    Play1Component,
    Play2Component,
    Play3Component
  ],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class PlaygroundModule {}
