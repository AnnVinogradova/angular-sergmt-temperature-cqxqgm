import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { LocationComponent } from './app/location.component';
import { CharacterComponent } from './app/character.component';
import { RootComponent } from './app/root.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'location', component: LocationComponent }
];
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    CharacterComponent,
    LocationComponent,
    RootComponent,
  ],
  bootstrap: [AppComponent],
})
export class MainModule {}
