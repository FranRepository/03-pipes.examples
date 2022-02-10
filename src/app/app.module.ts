import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeMx from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

registerLocaleData(localeMx,'es-MX');
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'es-MX'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
