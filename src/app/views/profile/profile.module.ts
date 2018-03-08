import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { ProfileViewerComponent } from './profile-viewer/profile-viewer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileBasicInfoComponent } from './profile-basic-info/profile-basic-info.component';
import { ProfileDependentInfoComponent } from './profile-dependent-info/profile-dependent-info.component';
import { ProfileServiceInfoComponent } from './profile-service-info/profile-service-info.component';
import { ProfileSalaryInfoComponent } from './profile-salary-info/profile-salary-info.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LandingComponent, ProfileViewerComponent, ProfileBasicInfoComponent, ProfileDependentInfoComponent, ProfileServiceInfoComponent, ProfileSalaryInfoComponent]
})
export class ProfileModule { }
