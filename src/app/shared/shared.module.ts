import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {MaterialModule} from '../main/material.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, SliderComponent],
  // indica a angular que estos pueden ser usados externamente (en el Dashboard para este ejemplo)
  exports: [FooterComponent, NavbarComponent, SidebarComponent, SliderComponent, MaterialModule],
})
export class SharedModule {}
