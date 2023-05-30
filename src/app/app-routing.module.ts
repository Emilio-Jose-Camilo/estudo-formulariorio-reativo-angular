import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { FormNativeValidationComponent } from './form-native-validation/form-native-validation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGorupComponent } from './form-gorup/form-gorup.component';
import { FormBilderComponent } from './form-bilder/form-bilder.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'template-driven',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'form-native',
    component: FormNativeValidationComponent
  },
  {
    path: 'form-validation',
    component: FormValidationComponent
  },
  {
    path: 'form-control',
    component: FormControlComponent
  },
  {
    path: 'form-gorup',
    component: FormGorupComponent
  },
  {
    path: 'form-bilder',
    component: FormBilderComponent
  },
  {
    path: 'form-array',
    component: FormArrayComponent
  },
    {
      path: 'login-google',
      component: LoginGoogleComponent
    },
    {
      path: 'reactive-form',
      component: ReactiveFormValidationComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
