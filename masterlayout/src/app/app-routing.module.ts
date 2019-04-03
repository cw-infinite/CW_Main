import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigOComponent } from './big-o/big-o.component';
import { JsDiffComponent } from './js-diff/js-diff.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: 'jsDiff', component: JsDiffComponent},
  { path: 'bigO', component: BigOComponent},
  { path: 'playground', component: PlaygroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
