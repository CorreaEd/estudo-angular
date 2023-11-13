import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ButtonStdComponent } from '../shared/button-std/button-std.component';
import { MainSectionComponent } from '../shared/main-section/main-section.component';
import { ImageComponent } from '../shared/image/image.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ButtonStdComponent,
    MainSectionComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
