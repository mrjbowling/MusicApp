import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { LessonsComponent } from './lessons/lessons.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'lessons', component: LessonsComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'payment', component: PaymentComponent}
        ]
    },
      {path: '**', redirectTo: '', pathMatch: 'full'},
];
