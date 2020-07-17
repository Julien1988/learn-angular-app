import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Lanister',
      email: 'james@got.com',
      drinkPreference: 'Coca',
      hobbies: ['Fuck Cersei', 'Kill children'],
    },
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
