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
import { BigOComponent } from './big-o/big-o.component';
import { HeaderComponent } from './header/header.component';
import { PlaygroundComponent } from './playground/playground.component';
import { JsDiffComponent } from './js-diff/js-diff.component';

@NgModule({
  declarations: [
    AppComponent,
    BigOComponent,
    HeaderComponent,
    PlaygroundComponent,
    JsDiffComponent
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
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
