import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { SignupComponent } from './signup/signup.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginSuperAdminComponent } from './login-super-admin/login-super-admin.component';

const routes: Routes = [
  { path: "user/login",                                 component: LoginUserComponent },
  { path: "admin/login",                                component: LoginAdminComponent },
  { path: "superadmin/login",                           component: LoginSuperAdminComponent },
  { path: "centers",                                    component: VaccinationCenterListComponent},
  { path: "centers/detail/:id",                         component: VaccinationCenterComponent},
  { path: "add/user",                                   component: SignupComponent},
  { path: "centers/detail/:id/reservation",             component: ReservationComponent },
  { path: "",                                           component: FrontPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
