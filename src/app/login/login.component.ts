import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern =  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
  constructor(private quizService: QuizService, private route: Router) { }

  ngOnInit() {
  }

  OnSubmit(username: string, password: string) {
    this.quizService.insertParticipant(username, password).subscribe((data: any) => {
      localStorage.clear();
      localStorage.setItem('participant', JSON.stringify(data));
      this.route.navigate(['/quiz']);
    })
  }

}
