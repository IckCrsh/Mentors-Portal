import {NgModule} from '@angular/core';
import {RegistrationComponent} from "./registration.component";
import {RegistrationRoutingModule} from "./registration-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  imports: [RegistrationRoutingModule, ReactiveFormsModule, CommonModule, InputTextModule],
  exports: [],
  declarations: [RegistrationComponent],
  providers: [],
})
export class RegistrationModule {

}
