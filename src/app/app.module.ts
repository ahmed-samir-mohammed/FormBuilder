import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsListComponent } from './components/inputs-list/inputs-list.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormPreviewComponent } from './components/form-preview/form-preview.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsListComponent,
    FormCreateComponent,
    FormPreviewComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
