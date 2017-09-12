import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiscoveryComponent } from './discovery.component';

import { DiscoveryService } from './discovery.service';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';


@NgModule({
  declarations: [
    AppComponent,
    DiscoveryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicAudioModule
  ],
  providers: [DiscoveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
