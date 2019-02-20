import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {SitesComponent} from './sites/sites.component';
import {SiteDetailComponent} from './sites/site-detail/site-detail.component';

export const mainRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'nosotros', component: AboutComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'lugares', component: SitesComponent},
];
