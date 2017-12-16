import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  {
   path: '',
   component: WelcomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'classes/:id',
    component:ClassDetailComponent
  },
  {
    path: 'admin',
    component:AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
