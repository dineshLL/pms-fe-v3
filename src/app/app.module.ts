import { DetailedViewComponent } from './views/wnop-rereg/detailed-view/detailed-view.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MasterDataService } from './services/master-data.service';
import { ProfileService } from './services/profile.service';
import { NgbDateNativeAdapter } from './adapters/ngb-date-native-adapter';
import { AuthService } from './services/auth.service';
import { AngMatImporterModule } from './ang-mat-importer/ang-mat-importer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent,
  FullDashboardLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent,
  FullDashboardLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MatProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NavigationService } from './services/nav.service';
import { HttpClientModule } from '@angular/common/http';
import { ConstsService } from './services/consts.service';
import { WnopService } from './services/wnop-service';
import { SnackAlertService } from './notifications/snack-alert.service';
import { AlertDialogComponent } from './notifications/alert-dialog/alert-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    // NgbModule.forRoot(),
    ChartsModule,
    BrowserAnimationsModule,
    AngMatImporterModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  // { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },

    AuthService,
    NavigationService,
    ConstsService,
    ProfileService,
    WnopService,
    MasterDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
