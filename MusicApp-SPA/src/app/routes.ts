import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { LessonsComponent } from './lessons/lessons.component';
import { PaymentComponent } from './payment/payment.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'lessons', component: LessonsComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'payment', component: PaymentComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
