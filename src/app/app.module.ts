import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { windowComponent } from './Components/window/windows.component'
import { wallComponent } from './Components/wall/wall.component';
import { homeComponent } from './Components/home/home.component';
import { barComponent } from './Components/bar/bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    windowComponent,
    wallComponent,
    homeComponent,
    barComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,wallComponent]
})
export class AppModule { }
