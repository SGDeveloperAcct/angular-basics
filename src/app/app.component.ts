import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Structural directives';
  users = [
    {
      name: 'User1',
      gender: 'male',
    },
    {
      name: 'User2',
      gender: 'female',
    },
    {
      name: 'User3',
      gender: 'male',
    },
    {
      name: 'User4',
    },
  ];

  users1 = null;

  users2 = [
    {
      name: 'User1',
      gender: 'male',
    },
    {
      name: 'User2',
      gender: 'female',
    },
    {
      name: 'User3',
      gender: 'male',
    },
    {
      name: 'User4',
    },
  ];

  date = new Date();
  sampleJson = { name: 'test', age: 10 };
  sampleArray = [1, 2, 3, 4, 5];
  asyncTest = new Observable((subscriber) => {
    subscriber.next([1, 2]);
  });

  getName(index, user) {
    return user.name;
  }
}
