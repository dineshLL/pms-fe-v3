import { SearchApplicationComponent } from './search-application/search-application.component';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExtraInformationComponent } from './extra-information/extra-information.component';

const routes: Routes = [
  {
    path: "",
    component: PageContainerComponent,
    data: {
      title: "General 55 Pensions Management"
    },
    children: [
      {
        path: "registration",
        component: RegistrationFormContainerComponent,
        data: {
          title: "Pensioner Registration"
        }
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        data: {
          title: "Dashboard"
        }
      },
      {
        path: "reports",
        component: ReportsComponent,
        data: {
          title: "Reports"
        }
      },
      {
        path: "extra",
        component: ExtraInformationComponent,
        data: {
          title: "General 55 Extra Information"
        }
      },
      {
        path: "search",
        component: SearchApplicationComponent,
        data: {
          title: "Search General 55 applications"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Gen55RoutingModule {}
