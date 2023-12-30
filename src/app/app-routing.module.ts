import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { SignupComponent } from './signup/signup.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PageUserComponent } from './page-user/page-user.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageSuperAdminComponent } from './page-super-admin/page-super-admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "login",                                      component: LoginComponent },
  { path: "user/",                                      component: PageUserComponent },
  { path: "admin/",                                     component: PageAdminComponent },
  { path: "superadmin/",                                component: PageSuperAdminComponent },
  { path: "centers",                                    component: VaccinationCenterListComponent},
  { path: "centers/detail/:id",                         component: VaccinationCenterComponent},
  { path: "add/user",                                   component: SignupComponent},
  { path: "centers/detail/:id/reservation",             component: ReservationComponent },
  { path: "", redirectTo: "/centers", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
