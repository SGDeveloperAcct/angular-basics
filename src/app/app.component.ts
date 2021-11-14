import { Component, VERSION } from '@angular/core';

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

  getName(index, user) {
    return user.name;
  }
}
