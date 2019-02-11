import {NgModule} from '@angular/core';
import {
  NavbarModule,
  WavesModule,
  DropdownModule,
  CarouselModule,
  ButtonsModule,
  IconsModule,
  InputsModule,
  ModalModule,
  CardsFreeModule,
} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    NavbarModule,
    WavesModule,
    DropdownModule,
    CarouselModule,
    ButtonsModule,
    IconsModule,
    InputsModule,
    FormsModule,
    ModalModule,
    CardsFreeModule,
  ],
  exports: [
    NavbarModule,
    WavesModule,
    DropdownModule,
    CarouselModule,
    ButtonsModule,
    IconsModule,
    InputsModule,
    FormsModule,
    ModalModule,
    CardsFreeModule,
  ],
})
export class MaterialModule {}
