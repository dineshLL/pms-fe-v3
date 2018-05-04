import { DashboardComponent } from './../warrents/dashboard/dashboard.component';
import { PageContainerComponent } from "./page-container/page-container.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReportsComponent } from "./reports/reports.component";
import { SearchForBookingComponent } from './search-for-booking/search-for-booking.component';
import { WarrentBookingFormComponent } from './warrent-booking-form/warrent-booking-form.component';
import { RegistrationFormContainerComponent } from './registration-form-container/registration-form-container.component';
import { SearchForRegistrationComponent } from './registration-form-container/search-for-registration/search-for-registration.component';
import { PensionerListComponent } from './registration-form-container/pensioner-list/pensioner-list.component';
import { SearchWarrentComponent } from './search-warrent/search-warrent.component';
import { WarrentListComponent } from './warrent-list/warrent-list.component';
import { UpdateWarrentComponent } from './update-warrent/update-warrent.component';

const routes: Routes = [
  {
    path: "",
    component: PageContainerComponent,
    data: {
      title: "Rail Warrants Management"
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
        path: "registration",
        component: SearchForRegistrationComponent,        
        data: {
          title: "Register Pensioner"
        }
      },
      {
        path: "registrationform",
        component: RegistrationFormContainerComponent,        
        data: {
          title: "Register Pensioner"
        }
      },
      {
        path: "bookwarrants",
        component: SearchForBookingComponent,
        data: {
          title: "Book Warrant"
        }
      },  
      {
        path: "pensionerdetails",
        component: WarrentBookingFormComponent,
        data: {
          title: "Book Warrant Form"
        }
      },    
      {
        path: "reports",
        // component: DashboardComponent,
        data: {
          title: "Reports"
        }
      },  
      {
        path: "searchwarrent",
        component: SearchWarrentComponent  ,
        data: {
          title: "Search Warrant"
        }
      },     
      {
        path: "warrentlist",
        component: WarrentListComponent,
        data: {
          title: "Warrant List"
        }
      },          
      {
        path: "pensionerlist",
        component: PensionerListComponent,
        data: {
          title: "Pensioner List"
        }
      },          
      {
        path: "updatewarrent",
        component: UpdateWarrentComponent,
        data: {
          title: "Update Warrant"
        }
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarrantsRoutingModule {}
