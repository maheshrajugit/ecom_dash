import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    PagesModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
 
  
  ],

  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: false,
        imageSize: 'contain'
      } as GalleryConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
