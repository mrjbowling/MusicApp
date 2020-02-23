import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { LessonsComponent } from './lessons/lessons.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './_guards/auth.guard';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'lessons', component: LessonsComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'payment', component: PaymentComponent},
            {path: 'students', component: StudentsComponent},
            {path: 'students/:id', component: StudentDetailsComponent},
        ]
    },
      {path: '**', redirectTo: '', pathMatch: 'full'},
];