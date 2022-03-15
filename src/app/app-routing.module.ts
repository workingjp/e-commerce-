import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SigninComponent } from './Components/Pages/signin/signin.component';
import { SignupComponent } from './Components/Pages/signup/signup.component';

const routes: Routes = [
{path:'' ,component:HomeComponent},
{path:'signin' , component:SigninComponent},
{path:'signup' , component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }