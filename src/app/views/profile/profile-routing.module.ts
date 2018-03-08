import { ProfileBasicInfoComponent } from './profile-basic-info/profile-basic-info.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import { ProfileViewerComponent } from './profile-viewer/profile-viewer.component';
import { ProfileDependentInfoComponent } from './profile-dependent-info/profile-dependent-info.component';
import { ProfileServiceInfoComponent } from './profile-service-info/profile-service-info.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {
      title: 'My Profile'
    },
    children: [
      {
        path: 'view',
        component: ProfileViewerComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'basic',
        component: ProfileBasicInfoComponent,
        data: {
          title: 'Basic Profile Information'
        }
      },
      {
        path: 'dependents',
        component: ProfileDependentInfoComponent,
        data: {
          title: 'My Dependents Information'
        }
      },
      {
        path: 'service',
        component: ProfileServiceInfoComponent,
        data: {
          title: 'My Service Information'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
