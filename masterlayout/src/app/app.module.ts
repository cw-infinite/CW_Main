import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NG Material Section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

// JS Diff
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';

import { BigOComponent } from './big-o/big-o.component';
import { JsDiffComponent } from './js-diff/js-diff.component';

@NgModule({
  declarations: [
    AppComponent,
    BigOComponent,
    HeaderComponent,
    JsDiffComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Material Design
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,

    // JSDiff
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
