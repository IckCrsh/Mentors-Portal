import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// @ts-ignore
const routes: Routes = [ { path: 'registration', loadChildren: () => import('./components/registration/registration.module').then (m => m.RegistrationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
