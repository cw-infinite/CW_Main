import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// core
import { HomeComponent } from './core/home/home.component';

import { BigOComponent } from './big-o/big-o.component';
import { JsDiffComponent } from './js-diff/js-diff.component';

const routes: Routes = [
  { path: 'jsDiff', component: JsDiffComponent},
  { path: 'bigO', component: BigOComponent},
  { path: 'playground', loadChildren: './playground/playground.module#PlaygroundModule'},
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
