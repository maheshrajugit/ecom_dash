import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { LoginPortalComponent } from './pages/login-portal/login-portal.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'login'},
  {path:'login',pathMatch:'full', component:LoginPortalComponent},
  { path: 'dashboard', loadChildren: () => PagesModule }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
