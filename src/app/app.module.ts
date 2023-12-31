import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReservationComponent } from './reservation/reservation.component'
import { ReservationService } from './service/reservation.service';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageSuperAdminComponent } from './page-super-admin/page-super-admin.component';
import { PageUserComponent } from './page-user/page-user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccinationCenterComponent,
    VaccinationCenterListComponent,
    SearchBarComponent,
    ReservationComponent,
    PageAdminComponent,
    PageSuperAdminComponent,
    PageUserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
