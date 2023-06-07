import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationComponent } from './app/location.component';
import { CharacterComponent } from './app/character.component';
import { RootComponent } from './app/root.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    CharacterComponent,
    LocationComponent,
    RootComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class MainModule {}
