import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';

export const appRoutes : Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'result', component: ResultComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];
