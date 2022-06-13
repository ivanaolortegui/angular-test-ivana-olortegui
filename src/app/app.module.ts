import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { NetworkService } from './services';
import { RequestService } from './services';

import { AppComponent } from './app.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent, ModalRegisterUserOfflineComponent } from './components';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ModalRegisterUserOfflineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [RequestService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }