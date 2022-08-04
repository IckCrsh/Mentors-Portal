import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// @ts-ignore
const routes: Routes = [
  { path: 'registration', loadChildren: () => import('./components/registration/registration.module').then (m => m.RegistrationModule)},
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then (m => m.AdminModule)},
  { path: 'login', loadChildren: () => import('./components/login/login.module').then (m => m.LoginModule)},
  { path: 'mentor', loadChildren: () => import('./components/mentor/mentor.module').then (m => m.MentorModule)},
  { path: 'student', loadChildren: () => import('./components/student/student.module').then (m => m.StudentModule)},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
