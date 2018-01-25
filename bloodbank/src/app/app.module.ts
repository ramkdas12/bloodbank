import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from "ngx-dropdown";
import { HttpClientModule }    from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { TextInputComponent } from './components/textInput/textInput.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormConfigService } from './services/formConfig.service';
import { HttpClient } from '@angular/common/http/src/client';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FormConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
