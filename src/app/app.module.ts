import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './material/material.module';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { SelectClientContainerComponent } from './components/animal-form/select-client-container/select-client-container.component'
import { NgxMaskModule } from 'ngx-mask'
import { InputMaskModule } from 'racoon-mask-raw';
import { CardClientComponent } from './components/card-client/card-client.component';
import { GridClientComponent } from './components/grid-client/grid-client.component';
import { MaxChar } from './service/pipe/max-caracteres';
import { AppPageComponent } from './components/app-page/app-page.component';
import { PageUnityComponent } from './components/app-page/page-unity/page-unity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientFormComponent,
    PopUpComponent,
    AnimalFormComponent,
    SelectClientContainerComponent,
    CardClientComponent,
    GridClientComponent,
    MaxChar,
    AppPageComponent,
    PageUnityComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputMaskModule,
    NgxMaskModule.forRoot(),


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
