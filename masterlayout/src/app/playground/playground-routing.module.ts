import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Play1Component } from './play1/play1.component';
import { Play2Component } from './play2/play2.component';
import { Play3Component } from './play3/play3.component';
import { PlaygroundComponent } from './playground.component';

const playRoutes = [
  { path: '', component: PlaygroundComponent, children: [
    { path: 'play1', component: Play1Component},
    { path: 'play2', component: Play2Component},
    { path: 'play3', component: Play3Component},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(playRoutes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule {}
