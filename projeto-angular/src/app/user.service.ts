import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User{
    let user = new User()
    user.name = "Eduardo"
    user.email = "correaeduardo96@outlook.com"

    return user
  }

  public userList():User[]{
    return [
      {
        name: "Eduardo",
        email: "correaeduardo96@outlook.com"
      },
      {
        name: "Karina",
        email: "karina@outlook.com"
      },
      {
        name: "João",
        email: "joao@outlook.com"
      },
      {
        name: "Ana",
        email: "ana@outlook.com"
      },
    ]
  }

}
