import { ListViewComponent } from './list-view/list-view.component';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageContainerComponent } from "./page-container/page-container.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReportsComponent } from "./reports/reports.component";
import { DetailedViewComponent } from './detailed-view/detailed-view.component';

const routes: Routes = [
  {
    path: "",
    component: PageContainerComponent,
    data: {
      title: "W&OP Re-Registration"
    },
    children: [
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
        path: "form",
        component: RegistrationFormContainerComponent,
        data: {
          title: "W&PO Re-Registration"
        }
      },
      {
        path: "list/pending",
        component: ListViewComponent,
        data: {
          title: "Pending List"
        }
      },
      {
        path: "detailed",
        component: DetailedViewComponent,
        data: {
          title: "W&OP Application Information"
        }
      },
      {
        path: "edit",
        component: RegistrationFormContainerComponent,
        data: {
          title: "Edit Application"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WnopReregRoutingModule {}
