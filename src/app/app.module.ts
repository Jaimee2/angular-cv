import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponentComponent } from './timeline-component/cv-component.component';
import { PresentationLetterComponent } from './presentation-letter/presentation-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponentComponent,
    PresentationLetterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
