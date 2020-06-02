import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboardmodules/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { DefaultComponent } from './layout/default/default.component';
import { CreateComponent } from './modules/create/create.component';
import { MonitorComponent } from './modules/monitor/monitor.component';
import { EventsComponent } from './modules/events/events.component';
import { LoadingComponent } from './components/loading/loading.component';


// import { AuthGuard } from './auth.service';



const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard', component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'create',
      component: CreateComponent
    },
    {
      path: 'events',
      component: EventsComponent
    },
    {
      path: 'monitor',
      component: MonitorComponent
    },

    ]
  },

  // { path: 'sidebar', component: SidebarComponent },

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', redirectTo: '/home', pathMatch: 'full' },
  { path: 'loading', component: LoadingComponent },
  // { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
