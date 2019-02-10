import {NgModule} from '@angular/core';
import {
  NavbarModule,
  WavesModule,
  DropdownModule,
  CarouselModule,
  ButtonsModule,
  IconsModule,
} from 'angular-bootstrap-md';

@NgModule({
  imports: [NavbarModule, WavesModule, DropdownModule, CarouselModule, ButtonsModule, IconsModule],
  exports: [NavbarModule, WavesModule, DropdownModule, CarouselModule, ButtonsModule, IconsModule],
})
export class MaterialModule {}
