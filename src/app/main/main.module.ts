import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {SharedModule} from '../shared/shared.module';
import {MainRoutingModule} from './main-routing.module';
import {SearchComponent} from '../shared/search/search.component';

@NgModule({
  declarations: [MainComponent, IndexComponent, AboutComponent, ContactComponent, SearchComponent],
  imports: [CommonModule, SharedModule, MainRoutingModule],
})
export class MainModule {}
