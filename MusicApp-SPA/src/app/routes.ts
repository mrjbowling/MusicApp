import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { LessonsComponent } from './lessons/lessons.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './_guards/auth.guard';
import { StudentsComponent } from './student/students/students.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentEditResolver } from './resolvers/student-edit.resolver';

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
            {path: 'student/edit', component: StudentEditComponent, resolve: {user: StudentEditResolver}},
        ]
    },
      {path: '**', redirectTo: '', pathMatch: 'full'},
];
