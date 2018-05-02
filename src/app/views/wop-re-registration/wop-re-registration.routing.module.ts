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
      title: "W&OP Re-registration"
    },
    children: [
      {
        path: "re-registration",
        component: RegistrationFormContainerComponent,
        data: {
          title: "Pensioner Identification"
        }
      },
      {
        path: "wop-re-registration-form",
        component: RegistrationFormContainerComponent,
        data: {
          title: "WOP Re-Registration"
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WopRegistrationRoutingModule {}
