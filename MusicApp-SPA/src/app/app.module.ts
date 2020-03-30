import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PipeDecorator } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { LessonsComponent } from './lessons/lessons.component';
import { PaymentComponent } from './payment/payment.component';
import { StudentsComponent } from './student/students/students.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentEditResolver } from './resolvers/student-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent_unsaved_changes.guard';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MessagesComponent,
      LessonsComponent,
      PaymentComponent,
      StudentsComponent,
      StudentDetailsComponent,
      StudentEditComponent

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      StudentEditResolver,
      PreventUnsavedChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
