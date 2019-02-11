import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {MaterialModule} from '../main/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardSiteComponent} from './card-site/card-site.component';
import {PackageComponent} from './package/package.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SliderComponent,
    CardSiteComponent,
    PackageComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SliderComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CardSiteComponent,
    PackageComponent,
  ],
})
export class SharedModule {}
