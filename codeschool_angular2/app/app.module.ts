import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts.component';

@NgModule({
	declarations: [ 
		AppComponent,
		CarPartsComponent
	],
	imports: [ BrowserModule, FormsModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }