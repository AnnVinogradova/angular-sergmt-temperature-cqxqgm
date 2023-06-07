import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './app/character.component';
import { LocationComponent } from './app/location.component';

const appRoutes: Routes = [
  { path: 'character', component: CharacterComponent },
  { path: 'location', component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }