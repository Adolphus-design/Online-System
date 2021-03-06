import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }
