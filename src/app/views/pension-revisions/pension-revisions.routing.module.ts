import { SearchRevisionComponent } from './search-revision/search-revision.component';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: PageContainerComponent,
    data: {
      title: "Pension Revision Management"
    },
    children: [
      {
        path: "revise",
        component: RegistrationFormContainerComponent,
        data: {
          title: "Pension Revision"
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
        path: "search",
        component: SearchRevisionComponent,
        data: {
          title: "Search Revision Applications"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionsRoutingModule {}
