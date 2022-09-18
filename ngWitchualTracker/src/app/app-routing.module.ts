import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RitualComponent } from './components/ritual/ritual.component';

const routes: Routes = [
  { path: 'ritual', component: RitualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
