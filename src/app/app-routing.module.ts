import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { SignupComponent } from './signup/signup.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: "centers",                                    component: VaccinationCenterListComponent},
  { path: "centers/detail/:id",                         component: VaccinationCenterComponent},
  { path: "users/add",                                  component: SignupComponent},
  { path: "centers/detail/:id/reservation",             component: ReservationComponent },
  { path: '', redirectTo: '/centers', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
