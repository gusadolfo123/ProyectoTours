import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

export const mainRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'nosotros', component: AboutComponent},
  {path: 'contacto', component: ContactComponent},
];
