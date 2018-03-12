import { SearchApplicationComponent } from './search-application/search-application.component';
import { PensionerTypeSelectorComponent } from './pensioner-type-selector/pensioner-type-selector.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageContainerComponent } from "./page-container/page-container.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationFormContainerComponent } from "./registration-form-container/registration-form-container.component";
import { ReportsComponent } from "./reports/reports.component";

const routes: Routes = [
  {
    path: "",
    component: PageContainerComponent,
    data: {
      title: "Regular Pensions Management"
    },
    children: [
      {
        path: "registration",
        component: PensionerTypeSelectorComponent,
        data: {
          title: "Pensioner Identification"
        }
      },
      {
        path: "form",
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
        path: "search",
        component: SearchApplicationComponent,
        data: {
          title: "Search General 55 applications"
        }
      },
      {
        path: "reports",
        component: ReportsComponent,
        data: {
          title: "Reports"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeceasedPensionsRoutingModule {}
