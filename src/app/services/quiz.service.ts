import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  readonly rootUrl = 'http://127.0.0.1:8000';
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;

  constructor(private http: HttpClient) { }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getParticipantName() {
    var participant = JSON.parse(localStorage.getItem('participant'))
    return participant.username;
  }

  insertParticipant(username: string, password: string) {
    var payload = {
      username: username,
      password: password
    }
    return this.http.post(this.rootUrl+ '/api/v1/login/', payload, httpOptions)
  }

  getQuestions() {
    return this.http.get(this.rootUrl + '/api/v1/get_questions');
  }

  getAnswers() {
    var payload = this.qns.map(x => x.id);
    console.log(payload);
    return this.http.post(this.rootUrl + '/api/v1/get_answers/', payload, httpOptions);
  }

  submitAnswer() {
    var payload = JSON.parse(localStorage.getItem('participant'));
    payload.score = this.correctAnswerCount;
    payload.timespent = this.seconds;
    return this.http.post(this.rootUrl + '/api/v1/submitTest/', payload, httpOptions)
  }
}
